import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import About from "./views/About.jsx";
import Detail from "./views/Detail.jsx";
import Error from "./views/Error.jsx";
import { useState } from 'react';
import axios from "axios";
import {Routes, Route} from "react-router-dom"

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
         <Routes>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/detail/:id" element={<Detail/>} />
            <Route path= "*" element={<Error/>}/>
         </Routes>
      </div>
   );
}

export default App;
