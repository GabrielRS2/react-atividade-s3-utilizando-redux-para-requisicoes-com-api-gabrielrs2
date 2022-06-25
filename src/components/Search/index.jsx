import { useState } from "react"
import { Container } from "./style"
import { addDigimonThunk } from "../../store/modules/digimons/thunks"
import { useDispatch, useSelector } from "react-redux/es/exports"

export const Search = () => {

  const [ input, setInput ] = useState("");
  const [ error, setError ] = useState(false);

  const dispatch = useDispatch()
  const digimons = useSelector((state) => state.digimons)

  function handleSearch() {
    setError(false)
    dispatch(addDigimonThunk(input, setError))
    setInput("")
  }

  return (
    <Container>
      <h2>Procure pelo seu Digimon! {error && <span>digimon não encontrado</span>}</h2>
      <div>
        <input 
        type={"text"}
        placeholder={"Procure seu Digimon"}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSearch}>Pesquisar</button>
      </div>

    </Container>
  )
}