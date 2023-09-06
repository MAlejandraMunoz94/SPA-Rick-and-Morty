import { useState } from "react";
import validation from "../components/validation";

export default function Form ({logIn}) {

const [userData,setUserData] = useState({email:"",password:""});
const [errors,setErrors] = useState({email:"",password:""});

function handleChange (event){
setUserData( {...userData,[event.target.name]:event.target.value} );
setErrors( validation({...userData,[event.target.name]:event.target.value}) )
};

function handleSubmit (evento){
evento.preventDefault();
logIn(userData);
};

    return (<div>
    <form>
    <label>Correo electrónico:</label>
    <input name="email" value={userData.email} onChange={handleChange} ></input>
    <span>{errors.email}</span>

    <label>Password:</label>
    <input name="password" value={userData.password} onChange={handleChange} ></input>
    <span>{errors.password}</span>

    <button onClick={handleSubmit} >Submit</button>
    </form>
    </div>)
}