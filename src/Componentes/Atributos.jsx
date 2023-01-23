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


                            <div className='card2'>
                                <ul className='name_status'>
                                    <li>HP</li>
                                    <li>Attack</li>
                                    <li>Defense</li>
                                    <li>SP. Attack</li>
                                    <li>SP. Defender</li>
                                    <li>Speed</li>
                                </ul>

                                <ul className='stats'>

                                    <li className='hp'>
                                        <span className='base_stat'> {a.stats[0].base_stat}</span>
                                        <span className='span'><Progressbar bgcolor="black" progress={a.stats[0].base_stat} height={10} /></span>
                                    </li>


                                    <li className='attack'>
                                        <span className=''> {a.stats[1].base_stat}</span>
                                        <span className='span'><Progressbar bgcolor="black" progress={a.stats[1].base_stat} height={10} /></span>
                                    </li>


                                    <li className='defense'>
                                        <span className=''> {a.stats[2].base_stat}</span>
                                        <span className='span'><Progressbar bgcolor="black" progress={a.stats[2].base_stat} height={10} /></span>
                                    </li>


                                    <li className='spattack'>
                                        <span> {a.stats[3].base_stat}</span>
                                        <span className='span'><Progressbar bgcolor="black" progress={a.stats[3].base_stat} height={10} /></span>
                                    </li>


                                    <li className='spdefense'>
                                        <span> {a.stats[4].base_stat}</span>
                                        <span className='span'><Progressbar bgcolor="black" progress={a.stats[4].base_stat} height={10} /></span>
                                    </li>


                                    <li className='speed'>
                                        <span> {a.stats[3].base_stat}</span>
                                        <span className='span'><Progressbar bgcolor="black" progress={a.stats[5].base_stat} height={10} /></span>
                                    </li>

                                </ul>



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