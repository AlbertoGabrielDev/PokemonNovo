import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
function App() {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/type");
  const [types, setTypes] = useState([]);


  useEffect(() => {
    getType()
  }, [])

  const getType = async () => {
    const rest = await fetch(url)
    const data = await rest.json();
    setTypes(data.results);
    console.log(data.results)
  }

  return (
    <>
      <h1>Tipos de Pokemons</h1>
      <ul>

        {
          types.map(type => (
            <li key={type.name}>{type.name}</li>
          ))
        }

      </ul>
    </>
  )

}

export default App;
