import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import About from "./views/About.jsx";
import Detail from "./views/Detail.jsx";
import Error from "./views/Error.jsx";
import Form from './views/Form';
import Favorites from "./views/Favorites"
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import {Routes, Route} from "react-router-dom"

function App() {

const location = useLocation();
const [access,setAccess]= useState(false);
const email = "aleejamjr@gmail.com";
const password = 1234567;
const navigate = useNavigate();
   
function logIn (userData){
   if (userData.email == email && userData.password == password){
   setAccess(true);
   navigate("/home");
   } else {window.alert("Login Incorrecto")}
};

function logOut (){
   setAccess(false);
};

useEffect(() => {!access && navigate('/');}, [access]);

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
         {location.pathname !=="/" && <Nav onSearch={onSearch} logOut={logOut} />}
         <Routes>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/detail/:id" element={<Detail/>} />
            <Route path= "/favorites" element= {<Favorites onClose={onClose}/>} />
            <Route path="/" element={<Form logIn={logIn} />} />
            <Route path= "*" element={<Error/>}/>
         </Routes>
      </div>
   );
}

export default App;
