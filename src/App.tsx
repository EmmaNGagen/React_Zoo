import "./App.css";
import { Animals } from "./components/pages/Animals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layouts";
import { Animal } from "./components/pages/Animal";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import { Home } from "./components/pages/Home";
import { useEffect, useState } from "react";
import { IAnimal } from "./models/IAnimal";
import axios from "axios";
import {
  defaultValue,
  IAnimalClickIt,
  AnimalContext,
} from "./contexts/AnimalContext";

function App() {
  const [animalsObject, setAnimalsObject] =
    useState<IAnimalClickIt>(defaultValue);

  useEffect(() => {
    const animalList = JSON.parse(localStorage.getItem("animalKey") || "[]");
    if (animalList.length) {
      setAnimalsObject({ ...animalsObject, animals: animalList });
    } else
      axios
        .get<IAnimal[]>("https://animals.azurewebsites.net/api/animals")
        .then((res) => {
          setAnimalsObject({ ...animalsObject, animals: res.data });
          localStorage.setItem("animalKey", JSON.stringify(res.data));
        });
  }, []);

  animalsObject.feedAnimal = (id: number) => {
    let animals = [...animalsObject.animals];

    console.log(animalsObject);
    animals[animals.findIndex((a) => parseInt(a.id) === id)].isFed = true;
    setAnimalsObject({ ...animalsObject, animals: animals });

    localStorage.setItem("animalKey", JSON.stringify(animals));
  };

  return (
    <AnimalContext.Provider value={animalsObject}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/animals" element={<Animals />}></Route>
            <Route path="/animal/:id" element={<Animal />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AnimalContext.Provider>
  );
}

export default App;
