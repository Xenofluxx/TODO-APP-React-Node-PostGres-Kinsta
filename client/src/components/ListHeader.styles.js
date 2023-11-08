import styled from "styled-components";
const MyListHeader = styled.div`
  background-color: pink;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 43px 0px 43px 0px;
  padding: 42px;
  width: 70%;
`;
const MyButton = styled.button`
  border-radius: 13px;
  padding: 12px;
  margin-right: 33px;
  font-weight: bold;
  &:hover {
    color: grey;
  }
`;
export const Styled = { MyButton, MyListHeader };
