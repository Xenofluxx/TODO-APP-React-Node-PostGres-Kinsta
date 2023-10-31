import { ListHeader } from "././components/ListHeader";
import { Styled } from "./App.styles";
import { useEffect } from "react";

export const App = () => {
  const userEmail = "susana.huesodevis@gmail.com";
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
      const json = await response.json();
      console.log(json);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    console.log(new Date());
  });
  return (
    <Styled.App>
      <ListHeader listName={"🍕 Holiday Tick List"} />
    </Styled.App>
  );
};
