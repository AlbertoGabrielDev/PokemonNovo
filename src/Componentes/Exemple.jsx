import React, { useContext } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
function App() {

  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const numberRef= useRef(0);

  const buttonRef = useRef();

  const oldCountRef = useRef();

  console.log("Renderizou")

  useEffect(()=>{
    numberRef.current = Math.random()
    // setNumber((prevNumber) => prevNumber )
  })

  useEffect(()=>{
    console.log(buttonRef.current.click());
  },[])

useEffect(()=>{
  oldCountRef.current = count;
},[count])

  return(
    <div className='App'>
      <h1> O number é: {number}</h1>
      <h1>O contador e : {count}</h1>
      <h1>UseRef : {numberRef.current}</h1>
    <h2>O contador anterior e : {oldCountRef.current} </h2>
      <button ref={buttonRef} onClick={() => setCount((prevCount) => prevCount +1)}>Add</button>
    </div>
  )
}

export default App;
