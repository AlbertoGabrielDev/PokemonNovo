import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
function App() {

  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [type, setType] = useState([]);

  useEffect(()=>{
    get()
  },[url])

  const get =async() =>{
     const res = await axios.get(url)
    // getTypes(res.data.results)
    console.log(res.data.results[1].url)
  }

  const getTypes = async(t) =>{
  //  t.map(async(rest)=>{
  //   const result = await axios.get(rest.url)
  //   setType((e)=>{
  //     e= [...e, result.data]
  //     return e;
  //   })
  //   console.log(result)
  //  })
   }
}

export default App;
