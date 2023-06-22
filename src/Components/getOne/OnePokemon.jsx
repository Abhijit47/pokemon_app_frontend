import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const OnePokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [pokeDetails, setPokeDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let { id } = useParams();

  useEffect(() => {
    const options = {
      headers: {
        'Content-type': 'application/json',
        'auth-token': localStorage.getItem('token'),
      },
    };

    const showPokemon = async () => {
      setIsLoading(true);
      try {
        const resPokemon = await axios.get(
          `${process.env.REACT_APP_GET_ONE_POKEMON_URL}/${id}`,
          options
        );
        setPokemon(resPokemon.data.pokemon);
        setIsLoading(false);
      } catch (error) {
        toast('Something Unexpected !!!', {
          type: 'info',
          position: 'bottom-left',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      }
    };
    showPokemon();
  }, [id]);

  useEffect(() => {
    // Get Pokemon from poke Api
    const { url } = pokemon;

    const getPokemon = async () => {
      setIsLoading(true);
      try {
        const resPoke = await axios(url);
        if (!resPoke) {
          setIsLoading(true);
        } else {
          setPokeDetails(resPoke.data);
          setIsLoading(false);
        }
      } catch (error) {
        toast('Unexpected happened !!!', {
          type: 'info',
          position: 'bottom-center',
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      }
    };

    getPokemon();
  }, [pokemon]);

  // fallback image
  const img = 'https://placehold.co/400';

  // spread out details of pokemon
  const {
    name,
    id: iD,
    height,
    weight,
    base_experience: xp,
    order,
    held_items,
  } = pokeDetails;

  // fallback guard
  if (!pokeDetails.sprites) return;
  const { front_shiny } = pokeDetails.sprites;

  return isLoading ? (
    <div className='d-flex justify-content-center mt-5'>
      <div className='spinner-grow text-dark' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  ) : (
    <div className='container-fluid p-3 mt-4 vstack align-items-center gap-3'>
      <div
        className='card shadow-sm bg-body-secondary'
        style={{ width: '18rem' }}>
        <div className='hstack justify-content-center mt-2'>
          <img
            src={front_shiny === undefined ? img : front_shiny}
            className='bg-body-tertiary w-50 h-50 rounded-circle shadow-sm'
            alt='...'
          />
        </div>
        <div className='card-body text-center'>
          <h5 className='card-title text-capitalize'>{name}</h5>
          <p className='card-text'></p>
        </div>
        <div className='hstack p-1 flex-wrap justify-content-center gap-2'>
          <span className='badge text-bg-primary'>ID: {iD}</span>
          <span className='badge text-bg-secondary'>Height: {height}</span>
          <span className='badge text-bg-success'>Weight: {weight}</span>
          <span className='badge text-bg-danger'>XP: {xp}</span>
          <span className='badge text-bg-warning'>Order: {order}</span>
          {/* <span className="badge text-bg-info">Info</span>
              <span className="badge text-bg-light">Light</span>
              <span className="badge text-bg-dark">Dark</span> */}
        </div>
        <div className=''>
          {held_items.length === 0 ? (
            <span className='badge text-bg-light'></span>
          ) : (
            <span className='badge text-bg-dark mb-1 ms-1'>Held items:</span>
          )}
          {/* <span className="badge text-bg-dark mb-1 ms-1">Held items:</span> */}
          {held_items?.map((item, i) => {
            return item.version_details?.map((details, i) => {
              const { name } = details.version;
              return (
                <ul key={i} className='list-group list-group-flush'>
                  <li className='list-group-item bg-dark-subtle text-capitalize border border-dark-subtle'>
                    {`${i + 1}. ${name}`}
                  </li>
                </ul>
              );
            });
          })}
        </div>
      </div>
      <div>
        <Link to={'/all-pokemons'} className='btn btn-outline-dark'>
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default OnePokemon;
