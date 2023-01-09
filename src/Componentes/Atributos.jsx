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
                        {/* <p>{a.stats[0].base_stat}</p>    
                        <p>{a.stats[1].base_stat}</p>     */}
                            <div className='card-habilidade'>
                                {
                                    a.stats.map((habi) => {
                                        return (
                                            <>
                                                
                                                {/* {habi.stat.name}  */}
                                               <div className='habi-numeros'>
                                              
                                               <span className='cor' size={`${habi.base_stat}px`}></span>
                                               </div>
                                               
                        
                                               {/* <div>
                                               <p className='habi-numeros'>{habi.base_stat}</p>
                                               </div> */}
                                                
                                            </>
                                        )
                                    })

                                }
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}


export default Atributos;