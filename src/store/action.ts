import {
  GET_POKEMON_REQUEST,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_FAILED,
  GET_POKEMON_DETAILS_SUCCESS,
  GET_POKEMON_DETAILS_REQUEST,
  GET_POKEMON_DETAILS_FAILED,
} from "./constants";
import {
  getPokemonType,
  getPokemonFailedType,
  setPokemonType,
  pokemonDataType,
  pokeDetailType,
  getPokemonDetailsType,
  getPokemonDetailsPayloadType,
  setPokemonDetailsType,
  getPokemonDetailsFailedType,
} from "./types";

export const getPokemon = (): getPokemonType => ({
  type: GET_POKEMON_REQUEST,
});
export const setPokemon = (payload: pokemonDataType): setPokemonType => ({
  type: GET_POKEMON_SUCCESS,
  payload,
});
export const getPokemonFailed = (): getPokemonFailedType => ({
  type: GET_POKEMON_FAILED,
});

export const getPokemonDetails = (
  payload: getPokemonDetailsPayloadType
): getPokemonDetailsType => ({
  type: GET_POKEMON_DETAILS_REQUEST,
  payload,
});
export const setPokemonDetails = (
  payload: pokeDetailType
): setPokemonDetailsType => ({
  type: GET_POKEMON_DETAILS_SUCCESS,
  payload,
});
export const getPokemonDetailsFailed = (): getPokemonDetailsFailedType => ({
  type: GET_POKEMON_DETAILS_FAILED,
});

export type PokeActionType =
  | getPokemonType
  | setPokemonType
  | getPokemonFailedType
  | getPokemonDetailsType
  | setPokemonDetailsType
  | getPokemonDetailsFailedType;
