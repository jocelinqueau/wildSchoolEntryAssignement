import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
const CreateTask = () => {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const onSubmit = (e) => {
    e.preventDefault();
    const task = {
      name,
      duration,
      date,
    };
    axios
      .post("https://wildtask.herokuapp.com/task/add", task)
      .then((res) => console.log(res.data))
      .then(() => (window.location = "/"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="container margin-top">
      <h3>Create New Task </h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Name: </label>
          <input
            type="text"
            required
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            type="text"
            className="form-control"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create Exercise Log"
            className="btn btn-purple"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
