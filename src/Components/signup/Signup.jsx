import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdAccountCircle, MdOutlineAlternateEmail, MdLockPerson } from "react-icons/md";

const bgColor = {
  backgroundColor: '#fd7e14',
};

const Signup = (props) => {
  // eslint-disable-next-line
  const { showAlert } = props;
  // console.log(props);

  const [signUpDetails, setSignUpDeatils] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(process.env.REACT_APP_SIGN_UP, {
        name: signUpDetails.name,
        email: signUpDetails.email,
        password: signUpDetails.password,
      });
      console.log(res.data);
      toast('Account created successfully', {
        type: "success",
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate('/login');

    } catch (err) {
      // eslint-disable-next-line
      const { error } = err.response.data;
      const { status } = err.response;
      toast(`{Something went wrong ${status}}`, {
        type: "error",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  // Store input data to state variable
  const handleChange = (e) => {
    setSignUpDeatils({ ...signUpDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className='container vstack align-items-center mt-3 mb-3'>
      <h3>Create your own Pokemon <span className='fs-5'>👇</span></h3>
      <form
        onSubmit={handleSubmit}
        className='bg-gradient p-3 rounded-3 shadow-sm row col-11 col-lg-6'
        style={bgColor}>

        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Full name
          </label>
          <div className='input-group mb-3'>
            <span className='input-group-text' id='name'>
              <MdAccountCircle />
            </span>
            <input
              type='text'
              className='form-control'
              name='name'
              placeholder='Username'
              autoComplete='off'
              aria-label='Username'
              aria-describedby='Username'
              value={signUpDetails.name}
              minLength={6}
              required
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email address
          </label>
          <div className='input-group mb-3'>
            <span className='input-group-text' id='email'>
              <MdOutlineAlternateEmail />
            </span>
            <input
              type='email'
              className='form-control'
              name='email'
              placeholder='Email'
              autoComplete='off'
              aria-label='email'
              aria-describedby='email'
              value={signUpDetails.email}
              required
              onChange={handleChange}
            />
          </div>
          <div id='emailHelp' className='form-text'>
            *We'll never share your email with anyone else.
          </div>
        </div>

        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <div className='input-group mb-3'>
            <span className='input-group-text' id='password'>
              <MdLockPerson />
            </span>
            <input
              type='password'
              className='form-control'
              name='password'
              placeholder='Password'
              aria-label='password'
              aria-describedby='password'
              value={signUpDetails.password}
              minLength={6}
              required
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='mb-3'>
          <label htmlFor='cpassword' className='form-label'>
            Confirm password
          </label>
          <div className='input-group mb-3'>
            <span className='input-group-text' id='cpassword'>
              <MdLockPerson />
            </span>
            <input
              type='password'
              className='form-control'
              name='cpassword'
              placeholder='Confirm password'
              aria-label='Confirm password'
              aria-describedby='Confirm password'
              minLength={6}
              required
            />
          </div>
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

export default Signup;
