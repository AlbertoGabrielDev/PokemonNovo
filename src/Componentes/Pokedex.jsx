import axios from "axios";
import { useEffect, useState } from "react"
import Pokemons from "./Pokemons";

const Pokedex = () => {
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [pokemon, setPokemon] = useState([])

    const [habilities, setHabilities] = useState("") ;

    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();

    const [pokemonHabi, setpokemonHabi] = useState();

    useEffect(() => {
        pokeFun()
       
    }, [url])

    const pokeFun = async () => { // poderia usar callback?
        const res = await axios.get(url)
        setHabilities(res.data.results.abilities)
        getPokemon(res.data.results)
        setNextUrl(res.data.next)
        setPrevUrl(res.data.previous)
        // console.log(res.data.results)
    }


    const getPokemon = async (res) => {
        res.map(async (item) => {
            const result = await axios.get(item.url)
            setPokemon(e => {
                e = [...e, result.data]
                return e;
            })
        })


        console.log(pokemon)
    }


    return (
        <>

            <Pokemons
                dados={pokemon}
            />

        <div className="botao_anterior">
        {
            <button onClick={()=>{
                setPokemon([])
                setUrl(prevUrl)
            }}>Pagina Anterior</button>
        }
    </div>
    <div className="botao_proximo">
        {
            <button onClick={()=>{
                setPokemon([])
                setUrl(nextUrl)
            }}>Pagina Seguinte</button>
        }
        </div>

        </>
    )


}

export default Pokedex;