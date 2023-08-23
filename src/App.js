import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import { useState } from 'react';
import axios from "axios";

function App() {

const [characters,setCharacters] = useState([]);

function onSearch(id) {
let exist = false;

if (characters.length >0){

for (let i=0; i<characters.length; i++){
   if (characters[i].id == id){ exist = true;}
};

if (exist === false){ 
   axios(`https://rickandmortyapi.com/api/character/${id}`)
   .then( ({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {window.alert('¡No hay personajes con este ID!')}
   });
};
} else {
   axios(`https://rickandmortyapi.com/api/character/${id}`)
   .then( ({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {window.alert('¡No hay personajes con este ID!')}
   });
};

};

function onClose (idd){
  const filtro = characters.filter( element => element.id !== parseInt(idd))
  setCharacters(filtro);
};

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose}/>
      </div>
   );
}

export default App;
