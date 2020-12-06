const router = require("express").Router();
const Person = require("../models/person.model");

router.route("/").get((req, res) => {
  Person.find()
    .then((task) => res.json(task))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;

  const newPerson = new Person({ name });
  newPerson
    .save()
    .then(() => res.json("new person created"))
    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
