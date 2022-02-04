import {
  GET_POKEMON_REQUEST,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_FAILED,
  GET_POKEMON_DETAILS_REQUEST,
  GET_POKEMON_DETAILS_SUCCESS,
  GET_POKEMON_DETAILS_FAILED,
} from "./constants";

type initialStateType = {
  pokemon: pokemonDataType;
  pokemonDetails: pokeDetailType;
  loading: boolean;
  hasError: boolean;
};

type pokeDataType = {
  name: string;
  height: number;
  weight: number;
};

type pokeDetailType = {
  name: string;
  height: number;
  weight: number;
  abilities: any;
  types: any;
  sprites: any;
};

type getPokemonType = {
  type: typeof GET_POKEMON_REQUEST;
};

type getPokemonFailedType = {
  type: typeof GET_POKEMON_FAILED;
};

type setPokemonType = {
  type: typeof GET_POKEMON_SUCCESS;
  payload: pokemonDataType;
};

type getPokemonDetailsType = {
  type: typeof GET_POKEMON_DETAILS_REQUEST;
  payload: getPokemonDetailsPayloadType;
};

type setPokemonDetailsType = {
  type: typeof GET_POKEMON_DETAILS_SUCCESS;
  payload: pokeDetailType;
};

type getPokemonDetailsFailedType = {
  type: typeof GET_POKEMON_DETAILS_FAILED;
};

type pokemonDataType = pokeDataType[];

type getPokemonDetailsPayloadType = number;

export type {
  getPokemonType,
  getPokemonFailedType,
  setPokemonType,
  getPokemonDetailsType,
  setPokemonDetailsType,
  getPokemonDetailsFailedType,
  getPokemonDetailsPayloadType,
  pokemonDataType,
  pokeDataType,
  pokeDetailType,
  initialStateType,
};
