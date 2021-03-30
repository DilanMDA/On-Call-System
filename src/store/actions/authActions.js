import * as actions from "./actionTypes";

// Sign up action creator
export const signUp = (data) => async (
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
    // console.log(res.user.uid);

    // Send the verification email
    const user = firebase.auth().currentUser;
    await user.sendEmailVerification();

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
export const signIn = (data) => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  dispatch({ type: actions.AUTH_START });
  try {
    await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
    dispatch({ type: actions.AUTH_SUCCESS });
  } catch (error) {
    // console.log( error.message );
    dispatch({ type: actions.AUTH_FAIL, payload: error.message });
  }
  dispatch({ type: actions.AUTH_END });
};

//clean up meaasage
export const clean = () => ({
  type: actions.CLEAN_UP,
});

// Verify email actionTypes

export const verifyEmail = () => async (
  dispatch,
  getState,
  { getFirebase }
) =>
{
  const firebase = getFirebase();
  dispatch( { type: actions.VERIFY_START } );
  try
  {
    const user = firebase.auth().currentUser;
    await user.sendEmailVerification();
    dispatch({type: actions.VERIFY_SUCCESS})
  } catch ( error )
  {
     dispatch( { type: actions.VERIFY_FAIL, payload:error.message } );
  }
};

// Send recovery  password

export const recoverPassword = (data) => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  dispatch({ type: actions.RECOVERY_START });
  try
  {
    //send email here
    await firebase.auth().sendPasswordResetEmail(data.email);
    dispatch({ type: actions.RECOVERY_SUCCESS });
  } catch (error) {
    // console.log( error.message );
    dispatch({ type: actions.RECOVERY_FAIL, payload: error.message });
  }
};
