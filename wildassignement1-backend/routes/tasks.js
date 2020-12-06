const router = require("express").Router();
const Task = require("../models/task.model");

router.route("/").get((req, res) => {
  Task.find()
    .then((task) => res.json(task))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newTask = new Task({ name, duration, date });
  newTask
    .save()
    .then(() => res.json("new task created"))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/:id").get((req, res) => {
  Task.findById(req.params.id)
    .then((task) => res.json(task))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/:id").delete((req, res) => {
  Task.findByIdAndDelete(req.params.id)
    .then(() => res.json("task deleted"))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/update/:id").post((req, res) => {
  Task.findById(req.params.id)
    .then((task) => {
      task.name = req.body.name;
      task.duration = Number(req.body.duration);
      task.date = Date.parse(req.body.date);

      task
        .save()
        .then(() => res.json("task updated"))
        .catch((err) => res.status(400).json("Error" + err));
    })
    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
