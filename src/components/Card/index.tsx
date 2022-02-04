import React from "react";
import { CardContainer } from "components/Card/styles";
import { pokeDetailType } from "store/types";

type CardProps = {
  pokemon: pokeDetailType;
};

type typeName = {
  name: string;
  [index: string]: any;
};

type pokeTypes = {
  type: typeName;
  [index: string]: any;
};

const Card: React.FC<CardProps> = ({ pokemon }): JSX.Element => {
  return (
    <CardContainer>
      <div className="Card_img">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <div className="Card_name">{pokemon.name}</div>
      <div className="Card_types">
        {pokemon.types.map((type: pokeTypes, index: number) => {
          return (
            <div className="Card_type" key={index}>
              {type.type.name}
            </div>
          );
        })}
      </div>
      <div className="Card_info">
        <div className="Card_data Card_data-weight">
          <p className="title">Weight</p>
          <p>{pokemon.weight}</p>
        </div>
        <div className="Card_data Card_data-weight">
          <p className="title">Height</p>
          <p>{pokemon.height}</p>
        </div>
        <div className="Card_data Card_data-ability">
          <p className="title">Ability</p>
          <p>{pokemon.abilities[0].ability.name}</p>
        </div>
      </div>
    </CardContainer>
  );
};

export default Card;
