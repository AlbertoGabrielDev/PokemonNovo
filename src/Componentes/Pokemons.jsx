import './Pokedex.css';

function Pokemons({ dados }) {

    var h0 = "";
    var h1 = "";
<<<<<<< HEAD
=======
    
>>>>>>> 3a7a39ee5b2838199eb81addfadf3907a2d4a684

    return (
        <>
            <div className="cards">
                {
                    dados.map((e) => {
                        return (
                            <>
                                <div className="card" key={e.id}>
                                    <div className="front">
                                        <p className="nome">{e.name}</p>
<<<<<<< HEAD
                                        <p className="atributos3">{e.types[0].type.name}</p>
                                        {/* <img className="imagem" src={e.sprites.front_default} alt={e.name} ></img> */}
                                        <img className='imagem' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${e.id}.svg`} alt={e.id} />
                                        {
                                            e.abilities.forEach((poke, index) => {
                                                if (index == 0) {
                                                    h0 = poke.ability.name;

                                                } if (index == 1) {
                                                    h1 = poke.ability.name
                                                }

                                            })
                                        }
                                        <p className="habilidade">{h0}</p>
                                        <p className="habilidade1">{h1}</p>
=======
                                        <p className="habilidade">{h0}</p>
                                        <p className="h1">{h1}</p>
                                        <p className="atributos3">{e.types[0].type.name}</p>
                                        {/* <img className="imagem" src={e.sprites.front_default} alt={e.name} ></img> */}
                                        <img className='imagem' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${e.id}.svg`} alt={e.id} />
                                        {/* {
                                            e.abilities.map((poke, index) => {
                                                return (
                                                    <>
                                                        <ol>
                                                            <li className='habilidade'>
                                                                {poke.ability.name}

                                                                

                                                            </li>
                                                        </ol>
                                                    </>
                                                )
                                            })
                                        }  */}

                                        {
                                            e.abilities.forEach((poke, index) => {
                                                if (index == 0 ) {
                                                    h0 = poke.ability.name;

                                                }if (index == 1) {
                                                    h1= poke.ability.name
                                                }
                                                
                                            })
                                        }
>>>>>>> 3a7a39ee5b2838199eb81addfadf3907a2d4a684

                                    </div>
                                </div>
                            </>
                        )
                    })
                }

            </div>
        </>
    )
}

export default Pokemons;