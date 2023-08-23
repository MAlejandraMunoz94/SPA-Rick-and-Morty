import axios from "axios"
import {useParams} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";


function Detail (){

const [characterDetail,setCharacterDetail] = useState([]);
const {id} = useParams();

useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
       if (data.name) {
          setCharacterDetail(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    }); return setCharacterDetail({})}, [id]);

    return (
        <div>
         <h2>{characterDetail.name && characterDetail.name}</h2>
         <h3>{characterDetail.status && characterDetail.status}</h3>
         <h3>{characterDetail.species && characterDetail.species}</h3>
         <h3>{characterDetail.gender && characterDetail.gender}</h3>
         <h3>{characterDetail.origin && characterDetail.origin.name}</h3>
         <img src={characterDetail.image} />
        </div>
    );
};

export default Detail;