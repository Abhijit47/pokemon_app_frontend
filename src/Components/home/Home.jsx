import React, { useState } from 'react';
import { HEADER_IMAGES } from '../../assets/images';
import HomeImage from './HomeImage';

const { img1, } = HEADER_IMAGES;

const Home = () => {

  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1200);

  return (
    <div className='container-fluid mt-4 p-3 vstack justify-content-center align-items-center'>
      {isLoading
        ? <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>

        : <div className='row vstack gap-2 align-items-center gx-0 '>
          <div className='col-lg-3 col-md-4 col-sm-4 col-6 '>
            <img src={img1} alt="" className='img-thumbnail border border-0' />
          </div>
          <div className='col-lg-2 col-md-3 col-sm-4 col-4 '>
            <HomeImage />
          </div>
        </div>
      }

    </div>
  );
};

export default Home;