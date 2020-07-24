import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { render, cleanup, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { fetchMockedData, usersMockedData } from '../__mocks__/mocked-data';
import { Home, PAGE_SIZE } from './Home';
import {
  ADD_FETCH_NATIONALITY_FILTER,
  NATIONALITIES,
  SWISS,
  SPANISH,
  BRITISH,
  FRENCH,
} from '../constants';
import { initialState as usersFetchInitialState } from '../store/reducers/usersFetch';
import { fetchUsers } from '../store/actions/usersFetch';

jest.mock('../components/UserPreview', () => ({ user }) => (
  <div data-testid="user">
    <div data-testid="user-first">{user.name.first}</div>
    <div data-testid="user-last">{user.name.last}</div>
  </div>
));

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock('../store/actions/usersFetch', () => ({
  fetchUsers: jest.fn(),
}));

const mockDispatch = jest.fn();

jest.mock('../components/Spinner', () => ({ user }) => <div data-testid="spinner">Loading...</div>);

describe('Home page component', () => {
  beforeEach(() => {
    useDispatch.mockImplementation(() => mockDispatch);
    mockDispatch.mockImplementation(() => fetchUsers);
    jest.useFakeTimers();
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.useRealTimers();
    cleanup();
  });

  it('should properly call the fetchUsers action', async () => {
    useSelector.mockImplementation((callback) => callback({ usersFetch: usersFetchInitialState }));

    const { getAllByTestId, getByTestId } = render(
      <MemoryRouter keyLength={0}>
        <Home />
      </MemoryRouter>
    );

    expect(fetchUsers).toHaveBeenCalledWith(
      'https://randomuser.me/api/?nat=BR,FR,CH,ES&page=1&results=50'
    );
  });

  it('should display error message when the state of the fetch contains an error', async () => {
    useSelector.mockImplementation((callback) =>
      callback({ usersFetch: { ...usersFetchInitialState, error: 'Some error.' } })
    );

    const { getAllByTestId, getByTestId } = render(
      <MemoryRouter keyLength={0}>
        <Home />
      </MemoryRouter>
    );

    // Users wrapper is correctly rendered
    const home = await waitFor(() => getByTestId('home'));

    expect(home).toBeDefined();

    // ErrorMessage is correctly rendered
    const errorMessage = getByTestId('alert-message');
    expect(errorMessage.textContent).toBe(
      'Error retrieving contacts.Refresh if the problem persists.'
    );
  });

  it('should properly render a spinner when the state of the fetch is loading', async () => {
    useSelector.mockImplementation((callback) =>
      callback({ usersFetch: { ...usersFetchInitialState, loading: true } })
    );

    const { debug, getAllByTestId, getByTestId } = render(
      <MemoryRouter keyLength={0}>
        <Home />
      </MemoryRouter>
    );

    // Users wrapper is correctly rendered
    const home = await waitFor(() => getByTestId('home'));

    expect(home).toBeDefined();

    const errorMessage = getByTestId('spinner');
    expect(errorMessage.textContent).toBe('Loading...');
  });

  it('should properly display the users stored in the fetch state', async () => {
    useSelector.mockImplementation((callback) =>
      callback({ usersFetch: { ...usersFetchInitialState, users: usersMockedData } })
    );

    const { getAllByTestId, getByTestId } = render(
      <MemoryRouter keyLength={0}>
        <Home />
      </MemoryRouter>
    );

    // Users wrapper is correctly rendered
    const home = await waitFor(() => getByTestId('home'));
    expect(home).toBeDefined();

    // Users are correctly rendered
    const users = getAllByTestId('user');

    for (let i = 0; i < usersMockedData.length; i++) {
      expect(users[i].textContent).toContain(usersMockedData[i].name.first);
    }
  });

  it('should properly display users with nationalities filter', async () => {
    useSelector.mockImplementation((callback) =>
      callback({ usersFetch: { ...usersFetchInitialState, users: usersMockedData } })
    );

    const { getAllByTestId, getByTestId } = render(
      <MemoryRouter keyLength={0}>
        <Home />
      </MemoryRouter>
    );

    // Users wrapper is correctly rendered
    const home = await waitFor(() => getByTestId('home'));
    expect(home).toBeDefined();

    // Users are correctly rendered
    const users = getAllByTestId('user');

    for (let i = 0; i < usersMockedData.length; i++) {
      expect(users[i].textContent).toContain(usersMockedData[i].name.first);
    }

    // The nationality flags of the queried users shall be displayed in the result message
    expect(getByTestId(`${BRITISH}-flag`)).toBeTruthy();
    expect(getByTestId(`${SWISS}-flag`)).toBeTruthy();
    expect(getByTestId(`${SPANISH}-flag`)).toBeTruthy();
    expect(getByTestId(`${FRENCH}-flag`)).toBeTruthy();
  });

  it('should properly apply the search filter', async () => {
    useSelector.mockImplementation((callback) =>
      callback({ usersFetch: { ...usersFetchInitialState, users: usersMockedData } })
    );

    const { container, debug, getAllByTestId, getByTestId } = render(
      <MemoryRouter keyLength={0}>
        <Home />
      </MemoryRouter>
    );

    // Users wrapper is correctly rendered
    const home = await waitFor(() => getByTestId('home'));
    expect(home).toBeDefined();

    let input = container.querySelector('input[name="search"]');
    expect(input).not.toBe(null);
    fireEvent.change(input, { target: { value: 'SiMmOn' } });

    const filteredUsers = getAllByTestId('user');

    // The filtering should apply and render 2 results: Elizabeth Fitzsimmons and Simmon Martin
    expect(filteredUsers.length).toBe(2);
    for (let i = 0; i < filteredUsers.length; i++) {
      expect(filteredUsers[i].textContent.toLocaleLowerCase()).toContain('simmon');
    }
  });
});
