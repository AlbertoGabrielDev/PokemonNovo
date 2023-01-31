import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
function App() {

  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [type, setType] = useState([]);
 
  useEffect(()=>{
    get()
  },[url])

  const get = async() =>{
    let res = await axios.get(url)
     let json = JSON.stringify(res.data.results) 
     //getTypes(res.data.results) // aqui ele me traz os dados do results, ou seja, os dados de todos os pokemons existentes
     
  console.log(json)
    }
    
  const getTypes = async(t) =>{
   t.map(async(rest)=>{
    const result = await axios.get(rest.url)
    setType((e)=>{
      e= [...e, result.data] //aqui ele entra na array, o map ta mapeando todos os dados dessa api, me mostrando cont, next, results
      return e;
    })
      console.log(result.data)
   })
   }
}

export default App;
