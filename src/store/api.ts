import axios from "axios";

export function getPokemonApi(
  url: string = "https://pokeapi.co/api/v2/pokemon"
) {
  return axios.get(url);
}

export function getPokemonDetailsApi(id: number) {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
}
