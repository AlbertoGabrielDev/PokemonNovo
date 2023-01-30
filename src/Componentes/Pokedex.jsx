import axios from "axios";
import { useEffect, useState } from "react"
import Atributos from "./Atributos";
import Pokemons from "./Pokemons";
import Example from "./Exemple";

const Pokedex = () => {
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [pokemon, setPokemon] = useState([])
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();

    useEffect(() => {
        pokeFun()

    }, [url])

    const pokeFun = async () => { // poderia usar callback?
        const res = await axios.get(url)
        // console.log(res.data.results)

        getPokemon(res.data.results)
        setNextUrl(res.data.next)
        setPrevUrl(res.data.previous)

    }

    const getPokemon = async (res) => {
        res.map(async (item) => {
            const result = await axios.get(item.url)
            setPokemon(e => {
                e = [...e, result.data]
                return e;

            })

        })
    }

    return (
        <>
            {/* <div className="columns">
                <div className="poke">
                    <Pokemons dados={pokemon} />
                </div>

                <div className="habi">
                    <Atributos habilidades={pokemon} />
                </div>

            </div> */}

            <Example/>

            <div className="botao_anterior">
                {
                    <button onClick={() => {
                        setPokemon([])
                        setUrl(prevUrl)
                    }}>Pagina Anterior</button>
                }
            </div>
            <div className="botao_proximo">
                {
                    <button onClick={() => {
                        setPokemon([])
                        setUrl(nextUrl)
                    }}>Pagina Seguinte</button>
                }
            </div>

        </>
    )
}

export default Pokedex;