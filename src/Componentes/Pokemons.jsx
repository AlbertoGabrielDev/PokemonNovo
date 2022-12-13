import './Pokedex.css';

function Pokemons({ dados }) {

    var h0 = "";
    var h1 = "";

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