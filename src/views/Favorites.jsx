import Card from "../components/Card";
import {useSelector} from "react-redux"


function Favorites ({onClose}){

const myFavorites= useSelector((state) => state.myFavorites );

return (<div>
    {myFavorites.map(element => <Card key={element.id} props ={element} onClose={onClose} />)}
 </div>);

}

export default Favorites;