import axios from 'axios';
import './Pokedex.css';
import { useState } from 'react';
import { useEffect } from 'react';

function Atributos({habilidades}){
   
    return(
        <>
        
            {
                habilidades.map((a)=>{
                    
                    return(
                        <>
                           {
                            a.stats.map((habi)=>{
                               return(
                                   <>
                                   <p className='habi'>{ habi.stat.name}</p>
                                   <p className='habi'>{ habi.base_stat}</p>

                                </>
                               ) 
                            })
                            
                           }
                        </>
                    )
                })
            }
        </>
    )
}


export default Atributos;