import {
  ADD_FETCH_NATIONALITY_FILTER,
  REMOVE_FETCH_NATIONALITY_FILTER,
  FETCH_USERS_BEGIN,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  SWISS,
} from '../../constants';
import { usersMockedData } from '../../__mocks__/mocked-data';

import {
  addFetchNationalityFilter,
  removeFetchNationalityFilter,
  fetchUsers,
  fetchUsersBegin,
  fetchUsersSuccess,
  fetchUsersFailure,
} from './usersFetch';

describe('Users fetch actions', () => {
  it('fetchUsersBegin should create FETCH_USERS_BEGIN action', () => {
    expect(fetchUsersBegin()).toEqual({
      type: FETCH_USERS_BEGIN,
    });
  });

  it('fetchUsersSuccess should create FETCH_USERS_SUCCESS action', () => {
    expect(fetchUsersSuccess(usersMockedData)).toEqual({
      type: FETCH_USERS_SUCCESS,
      payload: { users: usersMockedData },
    });
  });

  it('fetchUsersFailure should create FETCH_USERS_FAILURE action', () => {
    const error = 'Some error';
    expect(fetchUsersFailure(error)).toEqual({
      type: FETCH_USERS_FAILURE,
      payload: { error },
    });
  });

  it('addFetchNationalityFilter should create ADD_FETCH_NATIONALITY_FILTER action', () => {
    expect(addFetchNationalityFilter(SWISS)).toEqual({
      type: ADD_FETCH_NATIONALITY_FILTER,
      nationalityFilter: SWISS,
    });
  });

  it('removeFetchNationalityFilter should create REMOVE_FETCH_NATIONALITY_FILTER action', () => {
    expect(removeFetchNationalityFilter(SWISS)).toEqual({
      type: REMOVE_FETCH_NATIONALITY_FILTER,
      nationalityFilter: SWISS,
    });
  });
});
