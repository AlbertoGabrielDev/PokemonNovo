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
                                <div className="cards" key={e.id}>
                                    <div className="card">
                                        {/* <p className="nome">{e.name}</p>
                                        <p className="atributos3">{e.types[0].type.name}</p> */}
                                        <div className='imagem'>
                                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${e.id}.svg`} alt={e.id} />
                                        </div>

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