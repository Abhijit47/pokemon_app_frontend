import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdOutlineAlternateEmail, MdLockPerson } from 'react-icons/md';

const bgColor = {
  backgroundColor: '#fd7e14',
};

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(process.env.REACT_APP_LOGIN_URL, {
        email: loginDetails.email,
        password: loginDetails.password,
      });
      // console.log(res.data);
      if (res.data.success) {
        localStorage.setItem('token', res.data.token);
        toast('Login Success!', {
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
        navigate('/dashboard');
      }
    } catch (error) {
      toast(error.response.data.message, {
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
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className='container vstack align-items-center mt-3'>
      <h3>Login to continue...</h3>
      <form
        onSubmit={handleSubmit}
        className='bg-gradient p-4 rounded-2 shadow-sm row col-11 col-lg-6'
        style={bgColor}>
        {/* <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            name='email'
            className='form-control'
            id='email'
            value={loginDetails.email}
            onChange={handleChange}
          />

          <div id='emailHelp' className='form-text'>
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            name='password'
            className='form-control'
            id='password'
            value={loginDetails.password}
            onChange={handleChange}
          />
        </div> */}

        <label htmlFor='email' className='form-label'>
          Email address
        </label>
        <div className='input-group mb-1'>
          <span className='input-group-text' id='basic-addon1'>
            <MdOutlineAlternateEmail />
          </span>
          <input
            type='email'
            name='email'
            className='form-control'
            id='email'
            placeholder='Enter your mail'
            value={loginDetails.email}
            onChange={handleChange}
          />
        </div>
        <div id='emailHelp' className='form-text mb-3'>
          We'll never share your email with anyone else.
        </div>

        <label htmlFor='password' className='form-label'>
          Password
        </label>
        <div className='input-group mb-3'>
          <span className='input-group-text' id='basic-addon1'>
            <MdLockPerson />
          </span>
          <input
            type='password'
            name='password'
            className='form-control'
            id='password'
            placeholder='Enter your password'
            value={loginDetails.password}
            onChange={handleChange}
          />
        </div>

        <div className='p-2 hstack justify-content-center'>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
