import styled from "styled-components";

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  align-content: center;
  background-color: rgb(251 241 220);
  border: 4px;
  border-radius: 12px;
  border-style: solid;
  border-color: rgb(231 189 175);
  padding-top: 4%;
  padding-bottom: 4%;
  align-items: center;
  min-width: max-content;
`;
const ItemComponent = styled.div`
  margin: 12px;
  min-width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MyButton = styled.button`
  border-color: rgb(113 128 0);
  color: rgb(113 128 0);
  border-radius: 13px;
  padding: 12px;
  font-weight: bold;
  margin-left: 33px;
  margin-right: 12px;
  &:hover {
    color: purple;
  }
`;
export const Styled = { ListItem, ItemComponent, MyButton };
