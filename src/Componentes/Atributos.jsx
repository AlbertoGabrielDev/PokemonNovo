import axios from 'axios';
import './Atributos.css';
import { useState } from 'react';
import { useEffect } from 'react';

function Atributos({ habilidades }) {

    return (
        <>
              
            {

                
                habilidades.map((a) => {

                    return (
                        <>
                            <div className='habi-numeros'>
                            <span>HP</span>
                            <span className='cor' size={`${a.stats[0].base_stat}px`}></span>
                            </div>
                            <span>{a.stats[0].base_stat}</span>
                            {/* <div className='card-habilidade'>
                                {
                                    a.stats.map((habi) => {
                                        return (
                                            <>

                                                
                                                <div className='habi-numeros'>
                                                    {habi.stat.name}
                                                    <span className='cor' size={`${habi.base_stat}px`}></span>
                                                </div>  <p className=''>{habi.base_stat}</p>
                                              
                                               


                                            </>
                                        )
                                    })

                                }
                            </div> */}
                        </>
                    )
                })
            }
            
        </>
    )
}


export default Atributos;