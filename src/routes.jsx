import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./pages/General/Nav";
import Footer from "./pages/General/Footer";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Watch from "./pages/Watch";
import Category from "./pages/Category";
import Latest from "./pages/Latest";
import Anime from "./pages/Anime";
import Alphabetical from "./pages/Alphabetical";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/lancamentos" element={<Latest />} />
        <Route exact path="/categoria/:catStrg" element={<Category />} />
        <Route exact path="/letra/:str" element={<Alphabetical />} />
        <Route exact path="/anime/:id" element={<Anime />} />

        <Route exact path="/pesquisa" element={<Search />} />
        <Route exact path="/anime/:id/episode/:videoId" element={<Watch />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
