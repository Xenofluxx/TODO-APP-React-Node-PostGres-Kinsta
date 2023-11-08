import styled from "styled-components";

const Modal = styled.div`
  z-index: 3;
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 30%;
  height: fit-content;
  border-radius: 13px;
  border-style: solid;
  border-color: grey;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  background-color: white;
  padding: 23px;
`;
const XButton = styled.button`
  right: -10;
  top: -10;
  position: absolute;
  border-radius: 3px;
`;
const SubmitButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-wrap: wrap;
`;
const MyForm = styled.form``;
export const Styled = { Modal, XButton, SubmitButton, MyForm };
