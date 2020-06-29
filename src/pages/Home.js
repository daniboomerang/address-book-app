/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import { UserPreview, Spinner } from '../components';

export const PAGE_SIZE = 50;

/** InfiniteScroll loader node */
const Loader = (
  <div className="w-full h-32 pb-10 flex justify-center items-center">
    <Spinner />
  </div>
);

/** InfiniteScroll end message node */
const EndCatalogueMessage = <p className="text-center p-4 mb-8">End of users catalogue</p>;

/** Alert message displayed at the top of the page on fetch error */
const FetchErrorMEssage = () => (
  <div
    data-testid="fetch-error-message"
    className="z-10 border-b-4 bg-primary border-red-600 text-center py-2 lg:px-4 fixed top-0 left-0 w-full"
  >
    <div className="font-semibold mr-2 text-red-600 text-center flex-auto">
      Ups! There has been an error retrieving contacts.
      <br />
      Refresh the page if the problem persists.
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
    <InfiniteScroll
      dataLength={users.length}
      next={loadUsers}
      hasMore={hasMore}
      loader={Loader}
      endMessage={EndCatalogueMessage}
    >
      <div data-testid="home" className="m-auto max-w-xs sm:max-w-lg pt-16 pb-4">
        {error.length > 0 && <FetchErrorMEssage />}
        {users.map((user) => (
          <UserPreview key={user.email + user.login.username} user={user} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Home;
