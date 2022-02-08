import React, { useEffect } from "react";

import Card from "components/Card";
import ErrorState from "components/ErrorState";
import LoadingState from "components/LoadingState";
import { PokeDetailsContainer } from "modules/PokeDetails/styles";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonDetails } from "store/action";
import { initialStateType, pokeDetailType } from "store/types";

interface pokeDetailsStateType {
  pokemonDetails: pokeDetailType;
  loading: boolean;
  hasError: boolean;
}

const PokeDetails: React.FC = (): JSX.Element => {
  const params = useParams();

  const { pokemonDetails, loading, hasError } = useSelector<
    initialStateType,
    pokeDetailsStateType
  >((state) => ({
    pokemonDetails: state.pokemonDetails,
    loading: state.loading,
    hasError: state.hasError,
  }));

  const dispatch = useDispatch();
  const { name } = params;

  useEffect(() => {
    if (name) {
      dispatch(getPokemonDetails(name));
    }
  }, [name]);

  if (hasError) return <ErrorState />;
  return (
    <PokeDetailsContainer>
      {loading || !pokemonDetails.name ? (
        <LoadingState />
      ) : (
        <>
          <Card pokemon={pokemonDetails} />
        </>
      )}
    </PokeDetailsContainer>
  );
};
export default PokeDetails;
