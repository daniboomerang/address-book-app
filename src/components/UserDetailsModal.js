import React from 'react';
import ReactModal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMobileAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

/**
 * @param {Props} props
 * @param {Object} props.user - User details object
 * @param {boolean} props.isOpen -  Whether the modal is opened or not
 * @param {function} props.onclose - Callback to execute when clicking the close icon
 */
const UserDetailsModal = ({ user, isOpen, onClose }) => {
  const {
    name: { first: firstName, last: lastName },
    login: { username },
    email,
    picture: { large },
    location: {
      street: { name: streetName, number: streetNumber },
      city,
      state,
      postcode,
    },
    phone,
    cell,
  } = user;

  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel={`${user.firstName} ${user.lastName} details`}
      onRequestClose={onClose}
      overlayClassName="fixed flex items-center bg-black z-20 inset-0 bg-opacity-75"
      className="absolute bg-primary outline-none inset-x-0 w-10/12 sm:w-3/5 lg:w-2/5 mx-auto rounded-lg"
      ariaHideApp={false}
    >
      <div
        data-testid="user-details"
        className="border-4 border-blue-500 shadow-xl rounded-lg relative"
      >
        <FontAwesomeIcon
          data-testid="close-modal"
          className="absolute right-0 m-4 transform cursor-pointer duration-200 hover:scale-110 hover:text-red-600 absolute"
          icon={faTimes}
          size="2x"
          onClick={onClose}
        />
        <div className="h-64 px-4 py-8 sm:p-10">
          <p className="font-bold text-2xl sm:text-4xl lg:text-4xl">
            <span data-testid={firstName} className="mr-1">
              {firstName}
            </span>
            <span data-testid={lastName} className="ml-1">
              {lastName}
            </span>
          </p>
          <p className="text-red-600 text-base md:text-lg mt-2">Username</p>
          <p data-testid={username} className="my-1 text-base md:text-lg">
            {username}
          </p>
          <p className="text-red-600 text-base md:text-lg mt-2">Email Address</p>
          <p data-testid={email} className="my-1 text-sm md:text-lg mb-4">
            {email}
          </p>
        </div>
        <div className="h-36 px-4 py-8 sm:p-10 bg-primary border-t-4 border-blue-500 rounded-b-lg">
          <div className="relative">
            <div className="right-0 w-24 h-24 sm:w-32 sm:h-32 rounded-full shadow-lg absolute -mt-24 sm:-mt-32">
              <div className="flex border-4 rounded-full justify-center duration-200 transform w-24 h-24 sm:w-32 sm:h-32 border-red-600">
                <img
                  data-testid={large}
                  className="border-primary rounded-full transform duration-200 border-4"
                  src={large}
                  alt={username}
                />
              </div>
            </div>
          </div>
          <div className="text-blue-500 mb-6">
            <p className="text-red-600 text-base md:text-lg">Address</p>
            <div data-testid="address" className="my-1 text-base md:text-lg mb-4">
              <p>{`${streetNumber} ${streetName},`}</p>
              <p>{`PC: ${postcode}, ${city} ${state}`}</p>
            </div>
          </div>
          <div data-testid="phone-number" className="border-t-2 border-blue-500 flex items-center">
            <FontAwesomeIcon className="m-4 text-red-600" icon={faPhone} size="1x" />
            {phone}
          </div>
          <div data-testid="cell-number" className="border-t-2 border-blue-500 flex items-center">
            <FontAwesomeIcon className="m-4 text-red-600" icon={faMobileAlt} size="1x" />
            <span className="ml-3">{cell}</span>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default UserDetailsModal;
