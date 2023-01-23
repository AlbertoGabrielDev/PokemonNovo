import axios from 'axios';
import './Atributos.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Progressbar from './Progress_bar';
function Atributos({ habilidades }) {



    return (
        <>

            {


                habilidades.map((a) => {

                    return (
                        <>

                            {/* <div className='nome-skills' usar UL e LI>

                            </div> */}

                            <div className=''>
                                <table>

                                    <ul>
                    
                                        <li className='hp'>
                                            <span>HP</span>
                                            <span className=''> {a.stats[0].base_stat}</span>
                                            <span className='span'><Progressbar bgcolor="black" progress={a.stats[0].base_stat} height={10} /></span>
                                        </li>


                                        <li className='attack'>
                                            <span>Attack</span>
                                            <span className=''> {a.stats[1].base_stat}</span>
                                            <span className='span'><Progressbar bgcolor="black" progress={a.stats[1].base_stat} height={10} /></span>
                                        </li>

                                        <li className='defense'>
                                            <span>Defense</span>
                                            <span className=''> {a.stats[2].base_stat}</span>
                                            <span className='span'><Progressbar bgcolor="black" progress={a.stats[2].base_stat} height={10} /></span>
                                        </li>

                                        <li className='spattack'>
                                            <span>SP. Attack</span>
                                            <span> {a.stats[3].base_stat}</span>
                                            <span className='span'><Progressbar bgcolor="black" progress={a.stats[3].base_stat} height={10} /></span>
                                        </li>

                                        <li className='spdefense'>
                                            <span>SP. Defender</span>
                                            <span> {a.stats[4].base_stat}</span>
                                            <span className='span'><Progressbar bgcolor="black" progress={a.stats[4].base_stat} height={10} /></span>
                                        </li>

                                        <li className='speed'>
                                            <span>Speed</span>
                                            <span> {a.stats[3].base_stat}</span>
                                            <span className='span'><Progressbar bgcolor="black" progress={a.stats[5].base_stat} height={10} /></span>
                                        </li>

                                    </ul>

                                </table>

                            </div>
                            <br />
                        </>
                    )
                })
            }

        </>
    )
}


export default Atributos;