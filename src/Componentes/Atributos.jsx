import axios from 'axios';
import './Pokedex.css';
import { useState } from 'react';
import { useEffect } from 'react';

function Atributos({habilidades}){
   
    return(
        <>
        <p>nha</p>
            {
                habilidades.map((a)=>{
                    
                    return(
                        <>
                           {
                            a.stats.map((habi)=>{
                               return(
                                   <>
                                   <p className='habi'>{ habi.stat.name}</p>
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