import styled from "styled-components";
const MyListHeader = styled.div`
  background-color: pink;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin: 33px;
`;
const MyButton = styled.button`
  border-radius: 13px;
  padding: 6px;
  font-weight: bold;
`;
export const Styled = { MyButton, MyListHeader };
