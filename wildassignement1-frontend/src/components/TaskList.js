import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Task from "./Task";

const TaskList = () => {
  const [tasks, setTask] = useState([]);

  const deleteTask = (id) => {
    axios
      .delete(`https://wildtask.herokuapp.com/task${id}`)
      .then(() => console.log("task deleted"))
      .then(setTask(tasks.filter((el) => el._id !== id)))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios
      .get("https://wildtask.herokuapp.com/task")
      .then((task) => setTask(task.data))
      .catch((error) => console.log(error));
  }, []);
  const taskListing = () => {
    return tasks.map((task) => {
      return <Task task={task} key={task._id} deleteTask={deleteTask} />;
    });
  };
  return (
    <div className="flex">
      <h3>Task</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">name</th>
            <th scope="col">duration</th>
            <th scope="col">date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>{taskListing()}</tbody>
      </table>
    </div>
  );
};

export default TaskList;
