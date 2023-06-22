import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import {
  Navbar, Home, About, Dashboard, Login, Signup, CreatePokemon, AllPokemons, OnePokemon
} from './Components/index';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/create-pokemon' element={<CreatePokemon />} />
        <Route path='/all-pokemons' element={<AllPokemons />} />
        <Route path='/pokemon/:id' element={<OnePokemon />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;