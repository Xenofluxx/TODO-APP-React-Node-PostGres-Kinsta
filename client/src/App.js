import { ListHeader } from "././components/ListHeader";
import { Styled } from "./App.styles";
import { useEffect, useState, Fragment } from "react";
import { ListItem } from "./components/ListItem";
import { Modal } from "./components/Modal";

export const App = () => {
  const userEmail = ["susana.huesodevis@gmail.com"];
  const [tasks, setTasks] = useState();
  const [modalOpen, setModalOpen] = useState();

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
  //const d = new Date();
  useEffect(() => {
    byDate();
  }, [tasks]);

  // sorting tasks, remember to use reverse()
  const byDate = () => {
    return tasks?.sort((task1, task2) => {
      return new Date(task1?.date) - Date.parse(task2?.date);
    });
  };
  const byTitle = () => {
    return tasks?.sort((task1, task2) => {
      return task1?.title.localeCompare(task2?.title);
    });
  };
  const byProgress = () => {
    return tasks?.sort((task1, task2) => {
      return task1?.progress - task2?.progress;
    });
  };

  return (
    <Styled.App>
      <ListHeader
        setModalOpen={setModalOpen}
        listName={"🍕 Holiday Tick List"}
      />
      {modalOpen && <Modal />}
      <Styled.ListItems>
        {tasks?.map((task) => {
          return (
            <ul key={task.id}>
              <ListItem
                taskId={task.id}
                taskTitle={task.title}
                taskProgress={task.progress}
                taskDate={task.date}
              />
            </ul>
          );
        })}
      </Styled.ListItems>
    </Styled.App>
  );
};
