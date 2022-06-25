import { Container } from "./style"
import { useSelector } from "react-redux/es/hooks/useSelector"

export const DigimonList = () => {

  const digimons = useSelector((state) => state.digimons)

  return (
    <Container>
      <ul>
        {digimons.map((digimon) => (
          <li key={digimon.name}>
            <p>{digimon.name}</p>
            <img src={digimon.img} alt={digimon.name}/>
          </li>
        ))}
      </ul>
    </Container>
  )
}