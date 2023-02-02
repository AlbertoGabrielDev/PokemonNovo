
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
function App() {

  
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState(null); //armazena o nome dos tipo de pokemons
  const [pokemonList, setPokemonList] = useState([]);
 
  useEffect(() => {
    async function fetchTypes() {
      const response = await fetch('https://pokeapi.co/api/v2/type');
      const data = await response.json();
      setTypes(data.results);
     
    } 

    fetchTypes();
  }, []);
  
  useEffect(() => {
    async function fetchPokemonList() {
      if (!selectedType) {
        return;
      }

      const response = await fetch(`${selectedType.url}`);
      const data = await response.json();
      setPokemonList(data.pokemon);
     
    }

    fetchPokemonList();
  }, [selectedType]);

  return (
    <div>
      <h1>Pokemons por tipo</h1>
      <select onChange={e => setSelectedType(types.find(tipo => tipo.name === e.target.value))}>
        <option value="">Selecione um tipo</option>
        {types.map(tipo => (
          <option key={tipo.name} value={tipo.name}>
            {tipo.name}
          </option>
        ))}
      </select>
      {pokemonList.map(pokemon => ( //Isso traz os poke quando seleciono um tipo 
        <PokemonInfo key={pokemon.pokemon.name} pokemon={pokemon.pokemon} />
      ))}
    </div>
  );
}

function PokemonInfo({ pokemon }) {
  const [info, setInfo] = useState({});

  useEffect(() => {
    async function fetchInfo() {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      setInfo(data);
      
    }

    fetchInfo();

  }, [pokemon]);
  

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <ul>
        <li><strong>Peso:</strong> {info.weight}</li>
        <li><strong>Habilidades:</strong>
          <ul>
            {info.abilities && info.abilities.map(ability => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default App;
