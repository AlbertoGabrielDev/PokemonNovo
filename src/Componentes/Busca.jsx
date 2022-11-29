import React,{useState} from "react";
import axios from "axios";
import './Busca.css' ;

const Buscar = () =>{
    const [pokemon, setPokemon] = useState("");
    const [pokemonData,setPokemonData] = useState([]);

    const busca = (e) =>{
        setPokemon(e.target.value.toLowerCase());
    }

    const buscado = (e) =>{
        e.preventDefault();
        getPokemon();
    }

    const getPokemon = async ()=>{
        if(pokemon === ""){
            alert("Digite um Pokemon")
        }else{
            try{
                const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
                const res = await axios.get(url);
                setPokemonData(e =>{
                    e=[
                        ...e,res.data
                    ]
                    e.sort((a,b)=> a.id > b.id ? 1 : -1)
                    return e;
                })
            } catch (e){
                console.log(e);
            }
        }
    }

    return(
      <>
        
            <label>
                <input className="" 
                        type="text" 
                        onChange={busca}
                        placeholder="Digite o nome do Pokemon"
                        />
                <div className="botao_pesquisa">
                    <button onClick={buscado}>Buscar</button>
                    </div>        
            </label>
        

        <div className="cards">
            
        
        
        {
            pokemonData.map((e)=>{
                    return(
                           <>
                            <h1>nha</h1>
                             
                             </>
                    )
            })
        }

            

        </div>
      </>
    )

}

export default Buscar;