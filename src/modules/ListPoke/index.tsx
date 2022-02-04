import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "components/Box";
import { ListPokesContainer } from "modules/ListPoke/styles";
import { useNavigate } from "react-router-dom";
import LoadingState from "components/LoadingState";
import ErrorState from "components/ErrorState";
import { GET_POKEMON_REQUEST } from "store/constants";
import { pokemonDataType, initialStateType } from "store/types";

interface pokeStateType {
  pokemon: pokemonDataType;
  loading: boolean;
  hasError: boolean;
}

type pokeDetail = {
  name: string;
  height: number;
  weight: number;
};

const ListPoke: React.FC = (): JSX.Element => {
  const { pokemon, loading, hasError } = useSelector<
    initialStateType,
    pokeStateType
  >((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: GET_POKEMON_REQUEST });
  }, []);

  if (hasError) return <ErrorState />;
  return (
    <ListPokesContainer>
      {" "}
      {loading ? (
        <LoadingState />
      ) : (
        <div className="item_container">
          {pokemon.map((p: pokeDetail) => (
            <Box
              key={p.name}
              name={p.name}
              width={p.weight}
              height={p.height}
              clickHandler={() => navigate(`/${p.name}`)}
            />
          ))}
        </div>
      )}{" "}
    </ListPokesContainer>
  );
};

export default ListPoke;
