import {
  ADD_FETCH_NATIONALITY_FILTER,
  REMOVE_FETCH_NATIONALITY_FILTER,
  FETCH_USERS_BEGIN,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  MAX_CATALOGUE_SIZE,
  PAGE_SIZE,
  BRITISH,
  FRENCH,
  SWISS,
  SPANISH,
} from '../../constants';

export const initialState = {
  users: [],
  pageNumber: 1,
  loading: false,
  hasMore: true,
  error: '',
  nationalitiesFilter: [BRITISH, FRENCH, SWISS, SPANISH],
};

const usersFetch = (state = initialState, action) => {
  const { type, payload, nationalityFilter: newNationalityFilter } = action;
  const { users, pageNumber, nationalitiesFilter } = state;

  switch (type) {
    case FETCH_USERS_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: '',
      };

    case FETCH_USERS_SUCCESS:
      // All done: set loading "false".
      // Also, replace the users with the ones from the server
      return {
        ...state,
        loading: false,
        users: [...users, ...payload.users],
        pageNumber: pageNumber + 1,
        hasMore: payload.users.length < MAX_CATALOGUE_SIZE - PAGE_SIZE,
        error: '',
      };

    case FETCH_USERS_FAILURE:
      // The request failed, but it did stop, so set loading to "false".
      // Save the error, and we can display it somewhere
      return {
        ...state,
        loading: false,
        error: payload.error,
      };

    case ADD_FETCH_NATIONALITY_FILTER:
      // Fetching a new nationality filter will clean the users fetch state
      return {
        ...initialState,
        nationalitiesFilter: [...nationalitiesFilter, newNationalityFilter],
      };

    case REMOVE_FETCH_NATIONALITY_FILTER:
      // Removing a nationality filter will clean the users fetch state
      return {
        ...initialState,
        nationalitiesFilter: nationalitiesFilter.filter(
          (nationality) => newNationalityFilter !== nationality
        ),
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
};

export default usersFetch;
