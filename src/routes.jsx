import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./pages/General/Nav";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Watch from "./pages/Watch";
import Category from "./pages/Category";
import Latest from "./pages/Latest";
import Anime from "./pages/Anime";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/lancamentos" element={<Latest />}></Route>
        <Route exact path="/categoria/:catStrg" element={<Category />}></Route>
        <Route exact path="/anime/:id" element={<Anime />}></Route>

        <Route exact path="/pesquisa" element={<Search />}></Route>
        <Route
          exact
          path="/anime/:id/episode/:videoId"
          element={<Watch />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
