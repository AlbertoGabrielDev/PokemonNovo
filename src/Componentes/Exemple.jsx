import React, { useState, useEffect } from 'react';

function Example() {
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
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
      <select onChange={e => setSelectedType(types.find(type => type.name === e.target.value))}>
        <option value="">Selecione um tipo</option>
        {types.map(type => (
          <option key={type.name} value={type.name}>
            {type.name}
          </option>
        ))}
      </select>
      {pokemonList.map(pokemon => (
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

export default Example;