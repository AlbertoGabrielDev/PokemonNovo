import { useEffect } from 'react';
import { useState } from 'react';

function Type() {

    const [types, setTypes] = useState([]);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/type');

    useEffect(() => {
        getType();
    }, []);

    const getType = async()=>{
        const response = await fetch(url);
        const data = await response.json();
        setTypes(data.results);
        console.log(data.results)
    }

}

export default Type;
