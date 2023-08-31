import Card from "../components/Card";
import { useState } from "react";
import {useSelector} from "react-redux"
import { orderCards,filterCards } from "../redux/actions";
import { useDispatch } from "react-redux";


function Favorites ({onClose}){

const myFavorites= useSelector((state) => state.myFavorites );

const dispatch = useDispatch();

function handleOrder (event){
    if (aux){setAux(false)} else { setAux(true)};
    dispatch (orderCards(event.target.value));
};

function handleFilter (event){
    dispatch(filterCards(event.target.value));
}

const [aux,setAux] = useState(false);


return (<div>
     <select onChange = {handleOrder}>
    <option value="A">Ascendant</option>
    <option value="D">Descendent</option>
    </select>
    
    <select onChange = {handleFilter}>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Genderless">Genderless</option>
    <option value="unknown">Unknown</option>
    <option value="All">All genders</option>

    </select>

    {myFavorites.map(element => <Card key={element.id} props ={element} onClose={onClose} />)}

 </div>);

}

export default Favorites;