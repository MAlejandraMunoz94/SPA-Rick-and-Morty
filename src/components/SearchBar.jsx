import { useState } from "react";

export default function SearchBar({onSearch}) {

const [id,setId] = useState("");

function handleChange (event){
   const valor = event.target.value;
   setId(valor);
};

function random (){
   let num = Math.floor(Math.random()*826);
   onSearch(num);
}

   return (
      <div>
         <input id='search' value={id} onChange={handleChange} />
         <button onClick={()=> onSearch(id)}>Agregar</button>
         <button onClick={random}>Random</button>
      </div>
   );
};
