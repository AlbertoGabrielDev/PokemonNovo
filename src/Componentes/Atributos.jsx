import axios from 'axios';
import './Atributos.css';
import { useState } from 'react';
import { useEffect } from 'react';

function Atributos({habilidades}){
   
    return(
        <>
            {
                habilidades.map((a)=>{
                    
                    return(
                        <>
                       <div className='card-habilidade'>
                         {
                            a.stats.map((habi)=>{
                               return(
                                   <>
                                   <p className='habi-first'>{ habi.stat.name}</p>
                                   {/* <p className='habi-second'>{ habi.base_stat}</p> */}
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