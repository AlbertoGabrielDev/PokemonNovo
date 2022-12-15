import axios from 'axios';
import './Pokedex.css';
import { useState } from 'react';
import { useEffect } from 'react';

function Pokemons({ dados }) {

    var h0 = "";
    var h1 = "";

    var t0 = "";
    var t1 = "";
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

                                        <div className='pokemon-nome'>
                                            <span className="nome">{e.name}</span>
                                        </div>
                                        {
                                            e.types.forEach((poke, index) => {
                                                if (index == 0) {
                                                    t0 = poke.type.name;
                                                } if (index == 1) {
                                                    t1 = poke.type.name
                                                }
                                            })
                                        }

                                        <div className='tipo'>
                                        <p className='tipo0'>{t0}</p>
                                        <p className='tipo1'>{t1}</p>
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
                                       
                                        <p className="habilidade-0">{h0}</p>
                                        <p className="habilidade-1">{h1}</p>
                                        
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