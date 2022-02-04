import { initialStateType } from "store/types";
import { PokeActionType } from "store/action";
import {
  GET_POKEMON_REQUEST,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_FAILED,
  GET_POKEMON_DETAILS_SUCCESS,
  GET_POKEMON_DETAILS_REQUEST,
  GET_POKEMON_DETAILS_FAILED,
} from "store/constants";

const initialState: initialStateType = {
  pokemon: [],
  pokemonDetails: {
    name: "",
    height: 0,
    weight: 0,
    abilities: [],
    types: [],
    sprites: [],
  },
  loading: true,
  hasError: false,
};

export default function reducer(state = initialState, action: PokeActionType) {
  switch (action.type) {
    case GET_POKEMON_REQUEST:
      return {
        ...state,
        loading: true,
        hasError: false,
      };
    case GET_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemon: action.payload,
      };
    case GET_POKEMON_FAILED:
      return {
        ...state,
        loading: false,
        hasError: true,
      };
    case GET_POKEMON_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        hasError: false,
      };
    case GET_POKEMON_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemonDetails: action.payload,
      };
    case GET_POKEMON_DETAILS_FAILED:
      return {
        ...state,
        loading: false,
        hasError: true,
      };
    default:
      return state;
  }
}
