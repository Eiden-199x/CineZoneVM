import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { MovieDetails } from "./pages/MovieDetails";
import { Search } from "./pages/Search";
import { Shows } from "./pages/Shows";
import { TvDetails } from "./pages/TvDetails";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie-details/:id" element={<MovieDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/tv-details/:id" element={<TvDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
