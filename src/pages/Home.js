/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { UserPreview, Spinner } from '../components';

export const PAGE_SIZE = 50;

/** InfiniteScroll loader node */
const Loader = (
  <div className="w-full h-32 py-24 flex justify-center items-center">
    <Spinner />
  </div>
);

/** InfiniteScroll end message node */
const EndCatalogueMessage = <p className="text-center p-4 mb-8">End of users catalogue</p>;

/** Alert message displayed at the top of the page on fetch error */
const FetchErrorMEssage = () => (
  <div
    data-testid="fetch-error-message"
    className="z-10 border-t-4 bg-primary border-red-600 text-center py-2 lg:px-4 fixed bottom-0 left-0 w-full"
  >
    <div className="font-semibold text-red-600 px-4 text-center flex-auto">
      Error retrieving contacts.
      <br />
      Refresh if the problem persists.
    </div>
  </div>
);

/**
 * Adreess book home page
 * It retrieves the users from the https://randomuser.me API and renders the a grid
 * It makes use of infinite scrolling to load more users
 * It provides a search in order to filter results by first and last name
 */
const Home = () => {
  const [state, setState] = useState({
    users: [],
    pageNumber: 1,
    hasMore: true,
    error: '',
  });

  const { users, pageNumber, hasMore, error } = state;

  const loadUsers = () => {
    axios
      .get(`https://randomuser.me/api/?page=${pageNumber}&results=${PAGE_SIZE}`)
      .then(({ data: { results: newUsers } }) => {
        setState({
          // Adding new users to the list
          users: [...users, ...newUsers],
          // Updating page numbers
          pageNumber: pageNumber + 1,
          // Updating hasMore after last fetch
          hasMore: users.length < 1000,
          // Removing error state
          error: '',
        });
      })
      .catch(({ message: errorMessage }) => {
        setState({
          ...state,
          error: errorMessage,
        });
      });
  };

  useEffect(() => {
    // Use effect for loading users
    loadUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div data-testid="home">
      <div
        data-testid="header"
        className="z-10 fixed w-full border-b-4 flex border-blue-500 bg-primary"
      >
        <Link to="/settings">
          <FontAwesomeIcon
            className="m-4 transform cursor-pointer duration-200 hover:scale-110 hover:text-red-600 z-20"
            icon={faBars}
            fixedWidth={false}
            size="2x"
          />
        </Link>
      </div>
      <InfiniteScroll
        dataLength={users.length}
        next={loadUsers}
        hasMore={hasMore}
        loader={Loader}
        endMessage={EndCatalogueMessage}
      >
        <div
          data-testid="users-grid"
          className="m-auto px-4 sm:px-8 xs:pt-8 4sm:px-12 max-w-xs sm:max-w-lg pt-16 sm:pt-24"
        >
          {error.length > 0 && <FetchErrorMEssage />}
          {users.map((user) => (
            <UserPreview key={user.email + user.login.username} user={user} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Home;
