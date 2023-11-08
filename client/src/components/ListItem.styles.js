import styled from "styled-components";

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  background-color: rgb(251 241 220);
  border: 4px;
  border-radius: 12px;
  border-style: solid;
  border-color: rgb(231 189 175);
  padding-top: 4%;
  padding-bottom: 4%;
  padding-left: 12%;
  padding-right: 12%;
  margin: 3px;
`;
const ItemComponent = styled.div`
  margin: 12px;
  display: flex;
  margin: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Styled = { ListItem, ItemComponent };
