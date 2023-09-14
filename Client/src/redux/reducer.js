import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = { myFavorites: [], allCharacters: [], filtered: [] };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    case FILTER:
      return {
        ...state,
        filtered: state.allCharacters.filter(
          (element) => element.gender == action.payload
        ),
      };

    case ORDER:
      let favoritesOrd;
      if (action.payload == "A") {
        favoritesOrd = state.myFavorites.sort((a, b) => (a.id > b.id ? 1 : -1));
      } else {
        favoritesOrd = state.myFavorites.sort((a, b) => (a.id < b.id ? 1 : -1));
      }
      return { ...state, myFavorites: [...favoritesOrd] };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    default:
      return state;
  }
};
