import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NAV_LOGO } from '../../assets/images';

const { nav_logo } = NAV_LOGO;

const Navbar = () => {

  const navigate = useNavigate();

  let location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark position-sticky top-0 z-1'>
      <div className='container-fluid'>
        <div className=''>
          <Link className='navbar-brand justify-content-center' to={'/'}>
            <img className="" style={{ width: "5rem" }} src={nav_logo} alt="" />
          </Link>
        </div>
        <div>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
        </div>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav gap-lg-1 flex-md-row justify-content-md-center gap-md-3 flex-sm-row justify-content-sm-center gap-sm-3 flex-row justify-content-center gap-3 me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link
                className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                aria-current='page' to={'/'}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
                to="/about">
                About
              </Link>
            </li>
            {
              localStorage.getItem('token')
                ?
                <li className='nav-item'>
                  <Link
                    className={`nav-link ${location.pathname === "/dashboard" ? "active" : ""}`}
                    to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                : ""
            }

          </ul>
          {!localStorage.getItem('token') ?
            <div className='d-flex justify-content-center gap-2'>
              <Link className='btn btn-outline-info' to={'/login'} role='button'>
                Login
              </Link>
              <Link className='btn btn-outline-success' to={'/signup'} role='button'>
                Sign up
              </Link>
            </div>
            :
            <div className='d-flex justify-content-end gap-2'>
              <button className='btn btn-outline-info' onClick={handleLogout}>
                Logout
              </button>
            </div>
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
