import axios from 'axios';
import './Pokedex.css';

function Pokemons({ dados }) {

    var h0 = "";
    var h1 = "";


    // const habilidade = async ()=>{
    //     const habi = await axios.get(url)
        
    // }

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