import React, { useState } from 'react';

const PokemonCard = ({ info }) => {
  return (
    <div>
      <h2>{info.name}</h2>
      <p>Weight: {info.weight}</p>
      <p>Abilities:</p>
      <ul>
        {info.abilities && info.abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const [selectedType, setSelectedType] = useState('');
  const [pokemons, setPokemons] = useState([]);

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  return (
    <div>
      <select value={selectedType} onChange={handleTypeChange}>
        <option value="">All</option>
        {pokemons.map((pokemon, index) => (
          <option key={index} value={pokemon.type}>
            {pokemon.type}
          </option>
        ))}
      </select>
      {pokemons
        .filter((pokemon) => selectedType === '' || pokemon.type === selectedType)
        .map((pokemon, index) => (
          <PokemonCard key={index} info={pokemon} />
        ))}
    </div>
  );
};

export default App;