import SearchBar from './SearchBar.jsx';
import {NavLink} from "react-router-dom"

function Nav({onSearch,logOut}){

    return (
        <div>
        <NavLink to = "/about">
        <button>About</button>
        </NavLink>
        <NavLink to = "/home">
        <button>Home</button>
        </NavLink>
        <button onClick={logOut} >Log Out</button>
        <SearchBar onSearch={onSearch}/>
        </div>
    )
}
export default Nav;