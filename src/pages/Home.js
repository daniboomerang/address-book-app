import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import filterUsers from '../lib/filteringUtils';
import { AlertMessage, BrFlag, ChFlag, EsFlag, FrFlag, UsersList, Spinner } from '../components';
import { SWISS, SPANISH, BRITISH, FRENCH, PAGE_SIZE } from '../constants';
import { fetchUsers } from '../store/actions/usersFetch';

/**
 * InfiniteScroll end message node
 * @param {boolean} isFilterApplied - Whether results are already filtered
 * @param {boolean} withResults - Whether there are results at all or not
 */
const renderEndMessage = (isFilterApplied, withResults) => {
  let message;

  if (isFilterApplied && withResults) {
    message = 'Remove filter to retrieve more users';
  } else if (isFilterApplied && !withResults) {
    message = 'No results';
  } else {
    message = 'End of users catalogue';
  }

  return <p className="text-center p-4 m-12">{message}</p>;
};

/** InfiniteScroll loader node */
const Loader = (
  <div className="w-full h-32 py-24 flex justify-center items-center">
    <Spinner />
  </div>
);

/**
 * Adreess book home page
 * It retrieves the users from the https://randomuser.me API and renders the a grid
 * It makes use of infinite scrolling to load more users
 * It provides a search in order to filter results by first and last name
 */
export const Home = () => {
  const { users, pageNumber, hasMore, loading, error, nationalitiesFilter } = useSelector(
    ({ usersFetch }) => usersFetch
  );
  const dispatch = useDispatch();
  const [state, setState] = useState({
    searchFilter: '',
  });
  const { searchFilter } = state;

  const handleDispatch = () => {
    const nationalityFilterParam = nationalitiesFilter.length ? `nat=${nationalitiesFilter}&` : '';

    dispatch(
      fetchUsers(
        `https://randomuser.me/api/?${nationalityFilterParam}page=${pageNumber}&results=${PAGE_SIZE}`
      )
    );
  };

  // We load users after FIRST effect
  useEffect(() => {
    handleDispatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** HANDLERS */
  // It updates the search search name filter
  const handleSearchFilterChange = (e) => {
    e.preventDefault();
    setState({ ...state, searchFilter: e.target.value });
  };

  // It cleans the search filter
  const handleRemoveFilter = () => setState({ ...state, searchFilter: '' });

  // Handle user first/last name filtering
  const filteredUsers = filterUsers(users, searchFilter);
  const isFilterApplied = searchFilter.length > 0;
  const areThereResults = filteredUsers.length > 0;

  // Randomuser.me does not support filtering by user name so
  // we pause the loading mechanism while the filter is active
  const blockFetch = hasMore && !isFilterApplied;

  return (
    <div data-testid="home">
      <header data-testid="header" className="z-10 fixed w-full flex bg-primary py-2 items-center">
        <Link to="/settings">
          <FontAwesomeIcon
            className="m-4 transform cursor-pointer duration-200 hover:scale-110 hover:text-red-600 z-20"
            icon={faBars}
            size="2x"
          />
        </Link>
        <form className="absolute border-b-4 border-blue-500 mx-auto inset-x-0 text-center w-48 sm:w-64 h-16 flex items-center justify-center">
          <input
            type="text"
            name="search"
            className=" focus:outline-none text-center placeholder-blue-500 bg-primary relative"
            placeholder="Filter first or last name"
            onChange={handleSearchFilterChange}
            value={searchFilter}
          />
          {isFilterApplied && (
            <FontAwesomeIcon
              className="absolute right-0 mr-2 transform cursor-pointer duration-200 hover:scale-110 hover:text-red-600 absolute"
              icon={faTimes}
              size="1x"
              onClick={handleRemoveFilter}
            />
          )}
        </form>
      </header>
      <InfiniteScroll
        dataLength={filteredUsers.length}
        next={handleDispatch}
        hasMore={blockFetch}
        loader={loading ? Loader : null}
        endMessage={renderEndMessage(isFilterApplied, areThereResults)}
      >
        <div
          data-testid="users-grid"
          className="m-auto px-4 sm:px-8 xs:pt-8 4sm:px-12 max-w-xs sm:max-w-lg pt-16 sm:pt-20"
        >
          {areThereResults && (
            <div className="my-8">
              <div className="text-center text-xs">
                {`${filteredUsers.length} result${filteredUsers.length > 1 ? 's' : ''}${
                  nationalitiesFilter.length > 0 ? ' from' : ''
                }`}
              </div>
              {nationalitiesFilter && (
                <div className="flex justify-center mt-2">
                  {nationalitiesFilter.includes(BRITISH) && (
                    <BrFlag className="h-4 w-4 sm:h-8 sm:w-8 mx-1" />
                  )}
                  {nationalitiesFilter.includes(SWISS) && (
                    <ChFlag className="h-4 w-4 sm:h-8 sm:w-8 mx-1" />
                  )}
                  {nationalitiesFilter.includes(SPANISH) && (
                    <EsFlag className="h-4 w-4 sm:h-8 sm:w-8 mx-1" />
                  )}
                  {nationalitiesFilter.includes(FRENCH) && (
                    <FrFlag className="h-4 w-4 sm:h-8 sm:w-8 mx-1" />
                  )}
                </div>
              )}
            </div>
          )}
          {areThereResults && <UsersList users={filteredUsers} />}
          {error.length > 0 && (
            <AlertMessage>
              Error retrieving contacts.
              <br />
              Refresh if the problem persists.
            </AlertMessage>
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Home;
