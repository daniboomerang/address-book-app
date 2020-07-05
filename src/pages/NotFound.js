import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

/**
 * Adreess book not found page
 * It renders the 404 not found error message.
 */
const NotFound = () => (
  <div className="flex justify-center min-h-screen text-blue-500">
    <div className="w-full flex items-center justify-center">
      <div className="max-w-sm m-8">
        <div className="text-5xl md:text-15xl font-black">404</div>
        <div className="w-16 h-1 bg-purple-light my-3 md:my-6" />
        <p className="text-grey-darker text-2xl md:text-3xl font-light mb-8 leading-normal items-center flex">
          <span>Sorry, the page you are looking for could not be found...</span>
          <FontAwesomeIcon icon={faHeartBroken} size="2x" />
        </p>
        <Link className="transform duration-200 underline hover:text-red-600" to="/">
          Go to home page
        </Link>
      </div>
    </div>
  </div>
);

export default NotFound;
