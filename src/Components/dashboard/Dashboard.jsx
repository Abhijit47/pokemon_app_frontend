import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Dashboard = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    created: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const options = {
      headers: {
        'auth-token': localStorage.getItem('token'),
      },
    };
    const showUser = async () => {
      setIsLoading(true);
      try {
        const resUser = await axios.get(
          process.env.REACT_APP_GET_USER_URL,
          options
        );
        setUser(resUser.data);
        setIsLoading(false);
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
    showUser();
  }, []);

  const { name, email, created_at } = user;
  const event = new Date(created_at).toLocaleDateString('en-IN', {
    timeZone: 'Asia/Kolkata',
  });

  return (
    <div className='container mt-lg-5 mt-md-4 mt-sm-2 mt-1 vstack align-items-center p-4'>
      {isLoading ? (
        <div className='spinner-border text-dark' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      ) : (
        <>
          <div className='card mb-3 shadow-sm' style={{ maxWidth: '540px' }}>
            <div className='row gx-0'>
              <div className='col-md-4'>
                <img
                  src='https://placehold.co/600x600'
                  className='img-fluid rounded-lg-start'
                  alt='...'
                />
              </div>
              <div className='col-md-8'>
                <div className='card-body vstack gap-3'>
                  <h5 className='card-title'>Name: {name}</h5>
                  <p className='card-text user-select-none'>Email: {email}</p>
                  <p className='card-text text-end'>
                    <small className='text-body-secondary '>{`Last updated at ${event}`}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='hstack flex-wrap justify-content-center -2 gap-2'>
            <Link
              to={'/create-pokemon'}
              className='btn btn-outline-primary shadow-sm'>
              Create your own
            </Link>
            <Link
              to={'/all-pokemons'}
              className='btn btn-outline-success shadow-sm'>
              Show your own
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
