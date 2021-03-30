import * as actions from './actionTypes';

// Sign up action creator
export const signUp = ( data ) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
   dispatch({ type: actions.AUTH_START });
  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password);
    console.log(res.user.uid);
    firestore.collection("users").doc(res.user.uid).set({
      firstName: data.firstName,
      lastName: data.lastName,
    });
   dispatch({ type: actions.AUTH_SUCCESS });
  } catch (error) {
    dispatch({ type: actions.AUTH_FAIL, payload: error.message }); //catch error automatically
  }
 dispatch({ type: actions.AUTH_END });
};

// Logout action creator
export const signOut = () => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  try {
    await firebase.auth().signOut();
  } catch (error) {
    console.log(error.message);
  }
};

// Login action creatore
export const signIn = ( data ) => async ( dispatch, getState, { getFirebase } ) =>
{
  const firebase = getFirebase();
  dispatch({ type: actions.AUTH_START });
  try
  {
    await firebase.auth().signInWithEmailAndPassword( data.email, data.password );
      dispatch({ type: actions.AUTH_SUCCESS });
  }
  
  catch ( error )
  {
    // console.log( error.message );
    dispatch({ type: actions.AUTH_FAIL, payload: error.message });
  }
   dispatch({ type: actions.AUTH_END });
    
};