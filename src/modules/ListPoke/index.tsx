import React, { useEffect } from "react";

import Box from "components/Box";
import ErrorState from "components/ErrorState";
import LoadingState from "components/LoadingState";
import { ListPokesContainer } from "modules/ListPoke/styles";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPokemon } from "store/action";
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
    dispatch(getPokemon());
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
