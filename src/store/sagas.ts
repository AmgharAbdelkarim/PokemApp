import { call, put, takeLatest } from "redux-saga/effects";
import {
  setPokemon,
  getPokemonFailed,
  setPokemonDetails,
  getPokemonDetailsFailed,
} from "store/action";
import { getPokemonApi, getPokemonDetailsApi } from "store/api";
import {
  GET_POKEMON_REQUEST,
  GET_POKEMON_DETAILS_REQUEST,
} from "store/constants";
import { pokemonDataType } from "./types";

export function* getPokemon() {
  try {
    const {
      data: { results },
    } = yield call(getPokemonApi);

    let fetchedData: pokemonDataType = [];

    for (let i: number = 0; i < results.length; i++) {
      const { data: response } = yield call(getPokemonApi, results[i].url);
      const { name, height, weight } = response;
      fetchedData = [...fetchedData, { name, height, weight }];
    }

    yield put(setPokemon(fetchedData));
  } catch {
    yield put(getPokemonFailed());
  }
}

export function* watchGetPokemon() {
  yield takeLatest(GET_POKEMON_REQUEST, getPokemon);
}

export function* getPokemonDetails({ payload }: any) {
  try {
    const { data: response } = yield call(getPokemonDetailsApi, payload);
    yield put(setPokemonDetails(response));
  } catch {
    yield put(getPokemonDetailsFailed());
  }
}

export function* watchGetPokemonDetails() {
  yield takeLatest(GET_POKEMON_DETAILS_REQUEST, getPokemonDetails);
}

export default [watchGetPokemon, watchGetPokemonDetails];
