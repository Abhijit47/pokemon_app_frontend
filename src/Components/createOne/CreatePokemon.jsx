import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const bgColor = {
  backgroundColor: '#fd7e14',
};

const CreatePokemon = () => {
  const [pokemon, setPokemon] = useState({
    name: '',
    url: '',
  });

  const navigate = useNavigate();

  const options = {
    headers: {
      'auth-token': localStorage.getItem('token'),
    },
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        process.env.REACT_APP_CREATE_ONE_POKEMON_URL,
        {
          name: pokemon.name,
          url: `https://pokeapi.co/api/v2/pokemon/${pokemon.url}/`,
        },
        options
      );
      console.log(res.data);

      if (res.status === 201) {
        toast('Successfully created one pokemon 😉', {
          type: 'success',
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
        navigate('/all-pokemons');
      }
    } catch (err) {
      const { error } = err.response.data;
      const { status } = err.response;
      toast(`${error} ${status} 🚫`, {
        type: 'error',
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  };

  const handleChange = (e) => {
    setPokemon({ ...pokemon, [e.target.name]: e.target.value });
  };

  return (
    <div className='container vstack align-items-center '>
      <h1 className='text-center p-3 mt-3 border border-primary-subtle rounded-pill fs-3 mb-3 shadow-sm'>
        Create your own Pokemon
      </h1>
      <form
        onSubmit={handleSubmit}
        style={bgColor}
        className='bg-gradient rounded-2 shadow-lg p-4 row col-lg-6 col-md-8 col-12 align-items-center'>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label user-select-none'>
            Pokemon name
          </label>
          <input
            type='name'
            className='form-control'
            name='name'
            id='name'
            placeholder='Ex: balbasaur'
            autoComplete='off'
            minLength={2}
            value={pokemon.name}
            onChange={handleChange}
          />
        </div>

        {/* <div className="mb-3">
          <label htmlFor="url" className="form-label">Pokemon URL</label>
          <input
            type="url"
            className="form-control"
            name='url'
            id="url"
            placeholder="Ex: https://pokeapi.co/api/v2/pokemon/2/"
            value={pokemon.url}
            minLength={10}
            maxLength={255}
            onChange={handleChange} />
        </div> */}

        <div className='mb-3'>
          <label htmlFor='url' className='form-label user-select-none'>
            Pokemon order No.
          </label>
          <div className='input-group'>
            <span
              className='input-group-text user-select-none'
              id='basic-addon3'>
              pokeapi.co/api/v2/pokemon/
            </span>
            <input
              type='number'
              className='form-control'
              name='url'
              id='url'
              placeholder='Ex: 23'
              min={1}
              value={pokemon.url}
              autoComplete='off'
              minLength={2}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='hstack gap-3 justify-content-center'>
          <button type='submit' className='btn btn-outline-light'>
            Create
          </button>
          <Link to={'/dashboard'} className='btn btn-outline-warning'>
            Go Back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CreatePokemon;
