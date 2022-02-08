import React from "react";

import Header from "components/Header";
import ListPoke from "modules/ListPoke";
import PokeDetails from "modules/PokeDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<ListPoke />} />
          <Route path=":name" element={<PokeDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
