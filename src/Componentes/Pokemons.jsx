import axios from 'axios';
import './Pokedex.css';
import { useState } from 'react';
import { useEffect } from 'react';

function Pokemons({ dados }) {

    var h0 = "";
    var h1 = "";

    var t0 = "";
    var t1 = "";
    const Parentdiv = {
        
      }
    return (
        <>
       
            <div className="">
                {
                    dados.map((e) => {
                        return (
                            <>
                                <div className="" key={e.id}>
                                    <div className="card">

                                        <div className='imagem'>
                                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${e.id}.svg`} alt={e.id} />
                                        </div>
                                        <span className="nome">{e.name}</span>

                                        {
                                            e.types.forEach((poke, index) => {
                                                if (index == 0) {
                                                    t0 = poke.type.name;


                                                } if (index == 1) {
                                                    t1 = poke.type.name
                                                }
                                            })
                                        }
                                     

                                        <div className='classe'>
                                            <p className='' id='tipo0'>{t0}</p>
                                            <p className='' id='tipo1'>{t1}</p>
                                           
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


                                        <div class='container'>
                                            <p id='habilidade-0' className="habilidade-0">{h0}</p>
                                        </div>
                                        <div>
                                            <p id='habilidade-1' className="habilidade-1">{h1}</p>
                                        </div>

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