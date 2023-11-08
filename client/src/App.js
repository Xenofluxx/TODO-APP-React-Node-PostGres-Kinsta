import { ListHeader } from "././components/ListHeader";
import { Styled } from "./App.styles";
import { useEffect, useState, Fragment } from "react";
import { ListItem } from "./components/ListItem";

export const App = () => {
  const userEmail = ["susana.huesodevis@gmail.com"];
  const [tasks, setTasks] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
      const json = await response.json();
      setTasks(json);
      // console.log(json);
    } catch (err) {
      console.error(err);
    }
  };
  /*const d = new Date();
  useEffect(() => {
    console.log(d);
  }, []);*/

  // sorting tasks, remember to use reverse()
  const byDate = tasks?.sort((task1, task2) => {
    return Date.parse(task1.date) - Date.parse(task2.date);
  });
  const byTitle = tasks?.sort((task1, task2) => {
    return task1.title.localeCompare(task2.title);
  });
  const byProgress = tasks?.sort((task1, task2) => {
    return task1.progress - task2.progress;
  });

  return (
    <>
      <ListHeader listName={"🍕 Holiday Tick List"} />
      <Styled.ListItems>
        {tasks?.map((task) => {
          return (
            <>
              <ListItem
                taskId={task.id}
                taskTitle={task.title}
                taskProgress={task.progress}
                taskDate={task.date}
              />
            </>
          );
        })}
      </Styled.ListItems>
    </>
  );
};
