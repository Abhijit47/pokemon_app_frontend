import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='row col-lg-10 col-md-10 col-sm-11 col-12 m-auto bg-body-secondary mt-5'>
      <div className="jumbotron p-4">
        <h1 className="fs-4 text-center">Welcome to the Pokemon CRUD API!</h1>
        <div className="lead">
          <span className="badge text-bg-secondary">About Page Content:</span>
          <p className='user-select-none'>
            Our API provides a comprehensive set of endpoints to manage and interact with your favorite Pokemon data. Whether you're a seasoned Pokemon trainer or a budding enthusiast, our API is designed to make it easy for you to create, read, update, and delete Pokemon records.
          </p>

          <p>
            <span className="badge text-bg-info">Key Features:</span>
          </p>

          <ul className="list-group">
            <li className="list-group-item list-group-item-action">Retrieve Pokemon Information</li>
            <li className="list-group-item list-group-item-action">Create a Pokemon</li>
            <li className="list-group-item list-group-item-action">Explore Evolutions and Abilities</li>
            <li className="list-group-item list-group-item-action">Error Handling and Validation</li>
          </ul>

        </div>
        <hr className="my-4" />
        <Link className="btn btn-primary mb-3" data-bs-toggle="collapse" to="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Learn more</Link>

        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            <div className='vstack gap-2'>
              <span className="badge rounded-pill text-bg-primary align-self-start">
                1. Retrieve Pokemon Information:
              </span>
              <p>
                - Use our API endpoints to fetch detailed information about various Pokemon species, including their name, type, abilities, stats, and more. <br />
                - Discover the strengths and weaknesses of each Pokemon type, helping you strategize and build the ultimate team.
              </p>
            </div>

            <div className='vstack gap-2'>
              <span className="badge rounded-pill text-bg-info align-self-start">
                2. Create and Update Pokemon:
              </span>
              <p>
                - With our API, you can easily add new Pokemon to your collection. Provide all the necessary details, such as name, type, abilities, and stats, and watch your team grow. <br />
                - Update existing Pokemon records whenever you need to modify their information or correct any mistakes.
              </p>
            </div>
            <div className='vstack gap-2'>
              <span className="badge rounded-pill text-bg-success align-self-start">
                3. Explore Evolutions and Abilities:
              </span>
              <p>
                - Dive deep into the Pokemon evolution chain. Retrieve information about a Pokemon's pre-evolutions, evolutions, and their respective levels or methods of evolution. <br />
                - Access detailed descriptions and effects of various Pokemon abilities, empowering you to create powerful strategies.
              </p>
            </div>
            <div className='vstack gap-2'>
              <span className="badge rounded-pill text-bg-danger align-self-start">
                4. Error Handling and Validation:
              </span>
              <p>
                - Our API ensures data integrity and provides appropriate error messages for invalid requests, helping you troubleshoot and address any issues effectively.
              </p>
            </div>
            <div className='vstack gap-2'>
              <span className="badge rounded-pill text-bg-warning align-self-start">
                5. Developer-Friendly Documentation:
              </span>
              <p>
                - Take advantage of our comprehensive API documentation, which provides detailed information on endpoints, request and response formats, and example usage. It will guide you through the integration process and help you get up and running quickly.
              </p>
            </div>
            <hr className='my-4' />
            <h6 className='display-6 fs-6'>
              We strive to provide a seamless and user-friendly experience, enabling you to manage your Pokemon data effortlessly. Feel free to explore the API endpoints, experiment with different requests, and let your creativity soar!
            </h6>
            <h6 className='display-6 fs-6'>
              If you have any questions or encounter any difficulties, our support team is here to assist you. Enjoy using the Pokemon CRUD API and have a fantastic journey in the world of Pokemon!
            </h6>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;