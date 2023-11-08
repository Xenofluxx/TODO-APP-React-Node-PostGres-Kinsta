import { Styled } from "./ListItem.styles";

export const ListItem = ({ taskId, taskTitle, taskProgress, taskDate }) => {
  return (
    <Styled.ListItem>
      <Styled.ItemComponent>
        <div style={{ fontWeight: "bold" }}>Task ID</div>
        {taskId}
      </Styled.ItemComponent>
      <Styled.ItemComponent>
        {" "}
        <div style={{ fontWeight: "bold" }}>Task Name</div>
        {taskTitle}
      </Styled.ItemComponent>
      <Styled.ItemComponent>
        {" "}
        <div style={{ fontWeight: "bold" }}>Task Progress</div>
        {taskProgress}%
      </Styled.ItemComponent>
      <Styled.ItemComponent>
        {" "}
        <div style={{ fontWeight: "bold" }}> Date of Task Creation</div>
        {taskDate}
      </Styled.ItemComponent>
    </Styled.ListItem>
  );
};
