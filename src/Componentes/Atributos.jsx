import axios from 'axios';
import './Atributos.css';
import { useState } from 'react';
import { useEffect } from 'react';
// import styled, { keyframes } from "styled-components";
function Atributos({ habilidades }) {



    return (
        <>

            {


                habilidades.map((a) => {

                    return (
                        <>
                            {/* <div className='nome-skills'>

                            </div> */}

                            <div className=''>
                                <table>

                                    <tbody>
                                        <tr>
                                            <td> HP</td>

                                            <td>
                                                <span>{a.stats[0].base_stat}</span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>Attack</td>
                                            <td>
                                                <span>{a.stats[1].base_stat}</span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>SP. Attack</td>
                                            <td>
                                                <span>{a.stats[2].base_stat}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>SP. Defense</td>
                                            <td>
                                                <span>{a.stats[3].base_stat}</span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>Speed</td>
                                            <td>
                                                <span>{a.stats[4].base_stat}</span>
                                            </td>
                                        </tr>
                                    </tbody>

                                </table>

                            </div>
                            <br />
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