import React, { useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import ShowTask from "./components/ShowTask";
import "./App.css";

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [tasks, setTasks] = useState({});
  return (
    <div className="App">
      <Header />
      <AddTask
        taskList={taskList}
        setTaskList={setTaskList}
        tasks={tasks}
        setTasks={setTasks}
      />
      <ShowTask
        taskList={taskList}
        setTaskList={setTaskList}
        tasks={tasks}
        setTasks={setTasks}
      />
    </div>
  );
};

export default App;
