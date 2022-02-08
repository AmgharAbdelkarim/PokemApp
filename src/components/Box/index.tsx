import React from "react";

import { BoxContainer } from "components/Box/styles";

type BoxProps = {
  name: string;
  width: number;
  height: number;
  clickHandler: React.MouseEventHandler<HTMLDivElement>;
};

const Box = ({ name, width, height, clickHandler }: BoxProps) => {
  return (
    <BoxContainer onClick={clickHandler}>
      <span className="poke-name"> name : {name}</span>
      <span className="poke-width"> width : {width}</span>
      <span className="poke-height"> height : {height}</span>
    </BoxContainer>
  );
};

export default Box;
