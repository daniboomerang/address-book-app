import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import NationalityOptionsGrid from '../components/NationalityOptionsGrid';

/**
 * Adreess book settings page
 * It renders the different nationality options for users fetching
 */
const Settings = () => (
  <div className="w-full h-full">
    <div className="z-10 w-full border-b-4 flex border-blue-500 bg-primary">
      <Link to="/">
        <FontAwesomeIcon
          className="m-4 transform cursor-pointer duration-200 hover:scale-110 hover:text-red-600 z-20"
          icon={faArrowLeft}
          fixedWidth={false}
          size="2x"
        />
      </Link>
    </div>
    <NationalityOptionsGrid />
  </div>
);

export default Settings;
