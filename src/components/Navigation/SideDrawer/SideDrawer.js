import React from "react";
import styled from "styled-components";
import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/Navitems";
import Hamburger from "./Hamburger/Hamburger";

const FixedWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  background-color: var(--color-main);
  padding: 0rem 2rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  display: none;

  @media ${(props) => props.theme.mediaQueries.small} {
    display: flex;
  }
`;

const Wrapper = styled.div`
  display: flex;
  height:100%;
  width:100%;
  align-items:center;
  justify-content: space-between;
`;

const SideDrawer = () => {
  return (
    <FixedWrapper>
      <Wrapper>
        <Logo />
        <NavItems />
        <Hamburger/>
      </Wrapper>
    </FixedWrapper>
  );
};

export default SideDrawer;
