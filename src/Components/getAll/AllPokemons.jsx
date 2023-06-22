import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const btnColor = {
  backgroundColor: '#6610f2',
};


const AllPokemons = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    const options = {
      headers: {
        "auth-token": localStorage.getItem("token")
      }
    };

    const getData = async () => {
      setIsLoading(true);
      try {
        const resData = await axios.get(process.env.REACT_APP_GET_ALL_POKEMON, options);
        const { pokemons } = resData.data;
        setAllPokemons(pokemons);
        setIsLoading(false);
      } catch (err) {
        toast('Something Unexpected !!!', {
          type: "warning",
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    };

    if (localStorage.getItem('token')) {
      getData();
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className='container-fluid p-3 mt-4 vstack gap-2 align-items-center'>
      {isLoading
        ? (
          <div className="spinner-border text-primary text-center" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div className='row justify-content-center align-items-center gx-0 gap-3'>
            {
              allPokemons.map((pokemon, index) => {
                // Spread out item from state variable 
                const { _id, name, url, created_At } = pokemon;
                // Convert ISO Date String to Locale Date String
                const event = new Date(created_At).toLocaleString("en-IN");
                // set id with _id that stored in DB
                id = _id;

                return (
                  <div key={index} className="card text-center mb-3" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title text-capitalize">{name}</h5>
                      <p className="card-text user-select-none">{`${url.substr(0, 21)} ...`}</p>
                      <p className="card-text">{event}</p>
                      <Link
                        to={`/pokemon/${id}`} className="btn btn-outline-light" style={btnColor}>
                        Know More
                      </Link>
                    </div>
                  </div>
                );
              })
            }
          </div>
        )
      }
      <div className='hstack justify-content-center mt-3 gap-2'>
        <Link to="/create-pokemon" className="btn btn-outline-primary">Create another</Link>
        <Link to="/dashboard" className="btn btn-outline-success">Goto dashboard</Link>
      </div>
    </div>
  );
};

export default AllPokemons;