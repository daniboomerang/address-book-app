import axios from 'axios';
import {
  ADD_FETCH_NATIONALITY_FILTER,
  REMOVE_FETCH_NATIONALITY_FILTER,
  FETCH_USERS_BEGIN,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from '../../constants';

/**
 * It sets fetch state as beginning
 */
const fetchUsersBegin = () => ({
  type: FETCH_USERS_BEGIN,
});

/**
 * It updates the state with the new batch os users
 * @param {Array} users - Fetched batch of users
 */
const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: { users },
});

/**
 * It sets fetch state with error
 * @param {string} error - Error during the fetch
 */
const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: { error },
});

/**
 * Adds a nationality to the current selected nationalities state
 * @param {string} nationalityFilter - Nationality to be added
 */
const addFetchNationalityFilter = (nationalityFilter) => ({
  type: ADD_FETCH_NATIONALITY_FILTER,
  nationalityFilter,
});

/**
 * Removes a nationality from the current selected nationalities state
 * @param {string} nationalityFilter - Nationality to be removed
 */
const removeFetchNationalityFilter = (nationalityFilter) => ({
  type: REMOVE_FETCH_NATIONALITY_FILTER,
  nationalityFilter,
});

/**
 * It dispatches the beginning of fetch users
 * It dispatches the fetch users success on success
 * It dispatches the fetch users failure when failure
 * @param {string} url - The API url where users are fetched
 */
const fetchUsers = (url) => (dispatch) => {
  dispatch(fetchUsersBegin());
  return axios
    .get(url)
    .then(({ data: { results: newUsers } }) => {
      dispatch(fetchUsersSuccess(newUsers));
      return newUsers;
    })
    .catch(({ message: errorMessage }) => dispatch(fetchUsersFailure(errorMessage)));
};

export {
  addFetchNationalityFilter,
  removeFetchNationalityFilter,
  fetchUsers,
  fetchUsersBegin,
  fetchUsersSuccess,
  fetchUsersFailure,
};
