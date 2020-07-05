import React, { useState } from 'react';
import cx from 'classnames';

/**
 * It renders a user preview card
 * @param {Object} user - First name, last name, username, email and avatar.
 */
const UserPreview = ({ user }) => {
  const [isHovered, setHovered] = useState(false);
  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  const {
    name: { first: firstName, last: lastName },
    login: { username },
    email,
    picture: { large },
  } = user;

  return (
    <div
      data-testid={`user-${email}`}
      className={cx(
        'w-full block sm:flex border-4 text-center border-light my-6 transform cursor-pointer duration-200 hover:scale-110',
        {
          'border-red-600 text-red-600 rounded-md': isHovered,
          'border-blue-500': !isHovered,
        }
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={cx(
          'flex border-b-4 py-4 sm:border-r-4 sm:border-b-0 items-center justify-center duration-200',
          {
            'border-red-600': isHovered,
            'border-blue-500': !isHovered,
          }
        )}
      >
        <div
          className={cx(
            'flex border-4 rounded-full mx-4 md:mx-8 justify-center duration-200 transform',
            {
              'w-24 h-24 border-red-600': isHovered,
              'w-20 h-20 border-blue-500': !isHovered,
            }
          )}
        >
          <img
            data-testid={large}
            className="border-primary rounded-full transform duration-200 border-4"
            src={large}
            alt={username}
          />
        </div>
      </div>
      <div className="p-4 m-auto">
        <div className="my-1 text-lg md:text-xl">
          <span data-testid={firstName} className="mr-1">
            {firstName}
          </span>
          <span data-testid={lastName} className="ml-1">
            {lastName}
          </span>
        </div>
        <div data-testid={username} className="my-1 text-base md:text-lg">
          {username}
        </div>
        <div data-testid={email} className="my-1 text-sm mb-4">
          {email}
        </div>
      </div>
    </div>
  );
};

export default UserPreview;
