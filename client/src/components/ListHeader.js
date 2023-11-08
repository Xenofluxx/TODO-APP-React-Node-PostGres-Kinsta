import { Styled } from "./ListHeader.styles";
export const ListHeader = ({ setModalOpen, listName }) => {
  const signOut = () => {
    console.log("sing out...");
  };
  return (
    <Styled.MyListHeader>
      <h1 style={{ marginLeft: "43px" }}>{listName}</h1>
      <div>
        <Styled.MyButton
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Add
        </Styled.MyButton>
        <Styled.MyButton
          onClick={() => {
            signOut();
          }}
        >
          Sign out
        </Styled.MyButton>
      </div>
    </Styled.MyListHeader>
  );
};
