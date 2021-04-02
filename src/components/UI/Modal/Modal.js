import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Backdrop from "./Backdrop/Backdrop";

const WrappedModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  z-index: 150;
  justify-content: center;
  opacity: ${({ opened }) => (opened ? "1" : "0")};
  visibility: ${({ opened }) => (opened ? "visible" : "hidden")};
  width: 100%;
  max-width: 50rem;
  padding: 4rem;
  box-shadow: 0 0.5rem 3.5rem var(--shadow);
  border-radius: 2rem;
  background-color: var(--color-mainLighter);
  transition: all 0.1s;
`;

const Modal = ({ opened, children }) => {
  return ReactDOM.createPortal(
    <>
      <Backdrop opened={opened} />
      <WrappedModal opened={opened}>{children}</WrappedModal>
    </>,
    document.getElementById("root-modal")
  );
};

export default Modal;
