import { useEffect } from 'react';
import { useState } from 'react';

function Type() {

    const [types, setTypes] = useState([]);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/type');
    const [pokemonList, setPokemonList] = useState([]);

   
    useEffect(() => {
        getType();
       
    }, []);

    useEffect(()=>{

    },[])

    const getType = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setTypes(data.results);
        
       // console.log(data.results)
        
    }
    var tipoPokemon = types

    return (
        <>
            <h1>Tipos</h1>
            <select >
                <option value="" >
                    Selecione um tipo
                </option>
                {
                    types.map((tipo) => {
                        return (
                            <>
                                <option value={tipo.name} >
                                    {tipo.name}</option>
                            </>
                        )
                    })}             
            </select>

          {pokemonList.map((pokes) =>{
            <PokemonInfo key={pokes.pokemon.name} pokemon={pokes.pokemon}/>
          })}  
        </>
    )
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
  //Eu preciso de alguma conexao com o componente Pokemons, como tem o exemplo do chance
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

export default Type;
