import React from "react";
import { Link } from "react-router-dom";
const Task = (props) => {
  return (
    <tr>
      <td>{props.task.name}</td>
      <td>{props.task.duration}</td>
      <td>{props.task.date.substring(0, 10)}</td>
      <td>
        <Link to={"/edit/" + props.task._id}>edit</Link> |{" "}
        <a
          href="#"
          onClick={() => {
            props.deleteTask(props.task._id);
          }}
        >
          delete
        </a>
      </td>
    </tr>
  );
};

export default Task;
