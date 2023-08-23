import {Link} from "react-router-dom"

export default function Card({id,props,onClose}) {

   let {name,status,species,gender,origin,image} = props;

   return (
      <div>
         <button onClick={()=> onClose(id)}>X</button>
         <Link to = {"/detail/"+id}>
         <h2 className="card-name">{name} </h2>
         </Link>
         <h3>{status}</h3>
         <h3>{species}</h3>
         <h3>{gender}</h3>
         <h3>{origin.name}</h3>
         <img src={image} alt='' />
      </div>
   );
}
