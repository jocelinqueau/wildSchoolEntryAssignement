import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [name, setName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://argonautes.herokuapp.com/person/add", { name })
      .then((res) => console.log(res.data))
      .then(() => (window.location = "/"))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("https://argonautes.herokuapp.com/person")
      .then((persons) => setPersons(persons.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <header>
        <h1>
          <img
            src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"
            alt="Wild Code School logo"
          />
          Les Argonautes
        </h1>
      </header>

      <main>
        <h2>Ajouter un(e) Argonaute</h2>
        <form className="new-member-form" onSubmit={onSubmit}>
          <label htmlFor="name">Nom de l&apos;Argonaute</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Charalampos"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Envoyer</button>
        </form>

        <h2>Membres de l'équipage</h2>
        <section className="member-list">
          <div className="member-list-inner">
            {persons.map((person) => (
              <div key={person._id} className="member-item">
                {person.name}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
      </footer>
    </div>
  );
};

export default App;
