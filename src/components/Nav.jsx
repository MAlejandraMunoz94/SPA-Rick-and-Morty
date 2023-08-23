import SearchBar from './SearchBar.jsx';
import {NavLink} from "react-router-dom"

function Nav({onSearch}){

    return (
        <div>
        <NavLink to = "/about">
        <button>About</button>
        </NavLink>
        <NavLink to = "/home">
        <button>Home</button>
        </NavLink>
        <SearchBar onSearch={onSearch}/>
        </div>
    )
}
export default Nav;