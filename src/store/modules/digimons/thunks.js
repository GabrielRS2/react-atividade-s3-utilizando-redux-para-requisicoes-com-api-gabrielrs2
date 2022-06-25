import { addDigimon } from "./actions";
import axios from "axios";

export const addDigimonThunk = (digimon, setError) => {

  console.log(digimon);

  return (dispatch) => {
    axios.get(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`)
    .then((res) => {
      dispatch(addDigimon(res.data[0]))
    })
    .catch((err) => {
      setError(true)
      console.log(err);
    })
  }
};
