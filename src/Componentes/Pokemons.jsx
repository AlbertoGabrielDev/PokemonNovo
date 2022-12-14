import axios from 'axios';
import './Pokedex.css';
import {useState} from 'react';

function Pokemons({ dados }) {

    var h0 = "";
    var h1 = "";
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/") 
    const [habi,setHabi] = useState("")


    const getPokemon = async (res) => {
        res.map(async (item) => {
            const result = await axios.get(item.url)
            setHabi(e => {
                e = [...e, result.data]
                return e;
            })
            console.log(result.data.abilities)
        })
    }

    return (
        <>
            <div className="all">
                {
                    dados.map((e) => {
                        return (
                            <>
                                <div className="cards" key={e.id}>
                                    <div className="card">
                                        <div className='imagem'>
                                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${e.id}.svg`} alt={e.id} />
                                        </div>

                                        <div className='nome'>
                                            <span className="nome">{e.name}</span>
                                        </div>

                                        {/* <span className="atributos3">{e.types[0].type.name}</span> */}
                                        {
                                            e.abilities.forEach((poke, index) => {
                                                if (index == 0) {
                                                    h0 = poke.ability.name;

                                                } if (index == 1) {
                                                    h1 = poke.ability.name
                                                }

                                            })
                                        }
                                        {/* <p className="habilidade">{h0}</p>
                                        <p className="habilidade1">{h1}</p> */}
                                    </div >
                                </div >
                            </>
                        )
                    })
                }

            </div >
        </>
    )
}

export default Pokemons;