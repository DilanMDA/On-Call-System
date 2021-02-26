import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navigation/Navbar/Navbar";
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const MinWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh-6rem);
  margin-top: 6rem;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <SideDrawer/>
      <MinWrapper>{children}</MinWrapper>
    </>
  );
};

export default Layout;
