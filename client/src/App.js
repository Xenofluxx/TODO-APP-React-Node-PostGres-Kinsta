import { ListHeader } from "././components/ListHeader";
import { Styled } from "./App.styles";
import { useEffect } from "react";

export const App = () => {
  useEffect(() => {
    console.log(new Date());
  });
  return (
    <Styled.App>
      <ListHeader listName={"🍕 Holiday Tick List"} />
    </Styled.App>
  );
};
