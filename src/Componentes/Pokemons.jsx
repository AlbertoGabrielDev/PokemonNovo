import './Pokedex.css';

function Pokemons({dados}){
    return(
        <>
        <div className="cards">
            {
                dados.map((e)=>{
                    return(
                        <>
                        <div className="card" key={e.id}>
                            <div className="front">
                            <p className="nome">{e.name}</p>            
                             <p className="atributos3">{e.types[0].type.name}</p> 
                             {/* <img className="imagem" src={e.sprites.front_default} alt={e.name} ></img> */}
                             <img className='imagem' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${e.id}.svg`} alt={e.id} />
                              {
                                e.abilities.map((poke,index)=>{
                                    return(
                                        <>
                                          <ol>
                                          <li className='habilidade'>
                                          {poke.ability.name}
                                          </li>
                                          </ol>
                                        </>
                                    )
                                })
                             }  
                            
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