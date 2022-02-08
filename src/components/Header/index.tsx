import React from "react";

import { HeaderWrapper } from "components/Header/style";
import { Outlet } from "react-router-dom";

const Header: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      <HeaderWrapper>
        <a href="/">
          <span>poke App</span>
        </a>
      </HeaderWrapper>
      <Outlet />
    </React.Fragment>
  );
};

export default Header;
