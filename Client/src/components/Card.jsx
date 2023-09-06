import {Link} from "react-router-dom"
import { addFav, removeFav } from "../redux/actions";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";

function Card({props,onClose}) {

   let {id,name,status,species,gender,origin,image} = props;

   const myFavorites = useSelector((state)=> state.myFavorites);
   const dispatch = useDispatch();
   const [isFav,setIsFav] = useState(false);

   
   useEffect(() => {
      for (let i=0; i<myFavorites.length; i++){
         if (myFavorites[i].id === props.id) {
            setIsFav(true);
         }
      }; 
      }, [myFavorites]);

     function handleFavorite (){
      if (isFav){
         setIsFav(false);
         dispatch(removeFav(id));        
      } else {setIsFav(true);
         dispatch(addFav(props));
      };
   };

   return (
      <div>
         <button onClick={()=> onClose(id)}>X</button>
         {isFav ? (<button onClick={handleFavorite}>❤️</button>):(<button onClick={handleFavorite}>🤍</button>)}
         <Link to = {"/detail/"+id}>
         <h2 className="card-name">Name: {name}</h2>
         </Link>
         <h3>{id}</h3>
         <h3>Status: {status}</h3>
         <h3>Species: {species}</h3>
         <h3>Gender: {gender}</h3>
         <h3>Origin: {origin.name}</h3>
         <img src={image} alt='' />
      </div>
   );
}

export default Card;