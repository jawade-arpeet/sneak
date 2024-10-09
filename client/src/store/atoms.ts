import axios from "axios";
import { atom, selector } from "recoil";

interface Sneaker {
  _id: string;
  name: string;
  brand: string;
  price: number;
  imgURL: string;
  description: string;
}

const sneakersAtomState = atom<Sneaker[]>({
  key: "sneakersAtomState",
  default: selector({
    key: "sneakersSelectorState",
    get: async ({ get }) => {
      try {
        const sneakers = await axios
          .get("http://localhost:3000/api/sneaker")
          .then((res) => res.data);
        return sneakers;
      } catch (error) {
        console.log(error);
      }
    },
  }),
});

export default sneakersAtomState;
