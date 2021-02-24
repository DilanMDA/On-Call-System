import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navigation/Navbar/Navbar";

const MinWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh-6rem);
  margin-top: 6rem;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <MinWrapper>{children}</MinWrapper>
    </>
  );
};

export default Layout;
