import { Styled } from "./ListHeader.styles";
export const ListHeader = ({ listName }) => {
  const signOut = () => {
    console.log("sing out...");
  };
  return (
    <Styled.MyListHeader>
      <h1>{listName}</h1>
      <Styled.MyButton>Add</Styled.MyButton>
      <Styled.MyButton
        onClick={() => {
          signOut();
        }}
      >
        Sign out
      </Styled.MyButton>
    </Styled.MyListHeader>
  );
};
