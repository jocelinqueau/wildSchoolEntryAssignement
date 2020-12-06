import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TaskList from "./components/TaskList";
import CreateTask from "./components/CreateTask";
import EditTask from "./components/EditTask";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path="/" exact component={TaskList} />
        <Route path="/create" exact component={CreateTask} />
        <Route path="/edit/:id" exact component={EditTask} />
      </div>
    </Router>
  );
};

export default App;
