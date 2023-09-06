import { ADD_FAV,REMOVE_FAV,FILTER,ORDER} from "./actions";

const initialState= {myFavorites:[], allCharacters:[]};

export const reducer = (state= initialState,action) => {
    switch (action.type){
        case ADD_FAV: return {...state,myFavorites:[...state.myFavorites,action.payload], allCharacters:[...state.allCharacters,action.payload]};

        case FILTER:
        if (action.payload == "All"){ return {...state, myFavorites: state.allCharacters} }
        else { return {...state,myFavorites: state.allCharacters.filter(element => element.gender == action.payload)} };

        case ORDER: 
        let favoritesOrd;
        if (action.payload == "A") { favoritesOrd = state.myFavorites.sort( (a,b) => a.id > b.id ? 1 : -1);
        } else { favoritesOrd = state.myFavorites.sort( (a,b) => a.id < b.id ? 1 : -1) };
        return {...state,myFavorites:[...favoritesOrd]};

        case REMOVE_FAV: return {...state,myFavorites: state.myFavorites.filter(element => element.id !== Number(action.payload)), allCharacters: state.allCharacters.filter(element => element.id !== Number(action.payload))};
        
        default: return state;
    }
}