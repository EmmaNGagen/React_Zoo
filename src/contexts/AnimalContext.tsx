import { createContext } from "react";
import { IAnimal } from "../models/IAnimal";

export interface IAnimalClickIt {
  animals: IAnimal[];
  feedAnimal(id: number): void;
}

export const defaultValue: IAnimalClickIt = {
  animals: [],
  feedAnimal: (id: number) => {},
};

export const AnimalContext = createContext(defaultValue);
