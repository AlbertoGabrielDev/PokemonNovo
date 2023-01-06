import axios from 'axios';
import './Atributos.css';
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
                       <div className='card-habilidade'>
                         {
                            a.stats.map((habi)=>{
                               return(
                                   <>
                                   <p className='habi'>{ habi.stat.name}</p>
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