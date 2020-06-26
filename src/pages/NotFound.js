import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Adreess book not found page
 * It renders the 404 not found error message.
 */
const NotFound = () => (
  <div className="flex justify-center min-h-screen">
    <div className="w-full md:w-1/2 bg-white flex items-center justify-center">
      <div className="max-w-sm m-8">
        <div className="text-black text-5xl md:text-15xl font-black">404</div>
        <div className="w-16 h-1 bg-purple-light my-3 md:my-6" />
        <p className="text-grey-darker text-2xl md:text-3xl font-light mb-8 leading-normal">
          Sorry, the page you are looking for could not be found.
        </p>
        <Link to="/">Go home page</Link>
      </div>
    </div>
  </div>
);

export default NotFound;
