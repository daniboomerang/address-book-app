import usersFetch, { initialState } from './usersFetch';
import { usersMockedData } from '../../__mocks__/mocked-data';

import {
  ADD_FETCH_NATIONALITY_FILTER,
  REMOVE_FETCH_NATIONALITY_FILTER,
  FETCH_USERS_BEGIN,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  BRITISH,
  SWISS,
  SPANISH,
  FRENCH,
} from '../../constants';

describe('Users fetch reducers', () => {
  const someError = 'Some error';

  it('should handle initial state', () => {
    expect(usersFetch(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_FETCH_NATIONALITY_FILTER', () => {
    expect(
      usersFetch(
        { ...initialState, nationalitiesFilter: [] },
        {
          type: ADD_FETCH_NATIONALITY_FILTER,
          nationalityFilter: SPANISH,
        }
      )
    ).toEqual({ ...initialState, nationalitiesFilter: [SPANISH] });

    expect(
      usersFetch(
        { ...initialState, nationalitiesFilter: [SPANISH] },
        {
          type: ADD_FETCH_NATIONALITY_FILTER,
          nationalityFilter: SWISS,
        }
      )
    ).toEqual({ ...initialState, nationalitiesFilter: [SPANISH, SWISS] });
  });

  it('should handle REMOVE_FETCH_NATIONALITY_FILTER', () => {
    expect(
      usersFetch(
        { ...initialState },
        {
          type: REMOVE_FETCH_NATIONALITY_FILTER,
          nationalityFilter: FRENCH,
        }
      )
    ).toEqual({ ...initialState, nationalitiesFilter: [BRITISH, SWISS, SPANISH] });
  });

  it('should handle FETCH_USERS_BEGIN', () => {
    expect(
      usersFetch(
        { ...initialState, error: someError },
        {
          type: FETCH_USERS_BEGIN,
        }
      )
    ).toEqual({ ...initialState, loading: true, error: '' });
  });

  it('should handle FETCH_USERS_SUCCESS', () => {
    expect(
      usersFetch(
        { ...initialState, loading: true, error: someError },
        {
          type: FETCH_USERS_SUCCESS,
          payload: { users: usersMockedData },
        }
      )
    ).toEqual({
      ...initialState,
      loading: false,
      users: usersMockedData,
      pageNumber: 2,
      hasMore: true,
      error: '',
    });
  });

  it('should handle FETCH_USERS_FAILURE', () => {
    expect(
      usersFetch(
        { ...initialState, loading: true, error: 'Some old error' },
        {
          type: FETCH_USERS_FAILURE,
          payload: { error: someError },
        }
      )
    ).toEqual({ ...initialState, loading: false, error: someError });
  });
});
