import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, waitFor, fireEvent } from '@testing-library/react';
import axios from 'axios';
import { fetchMockedData, usersMockedData } from '../__mocks__/mocked-data';
import { MemoryRouter } from 'react-router-dom';
import { Home, PAGE_SIZE } from './Home';
import { NATIONALITIES, SWISS, SPANISH, BRITISH, FRENCH } from '../constants';

jest.mock('axios');
jest.mock('../components/UserPreview', () => ({ user }) => (
  <div data-testid="user">
    <div data-testid="user-first">{user.name.first}</div>
    <div data-testid="user-last">{user.name.last}</div>
  </div>
));

jest.mock('../components/Spinner', () => ({ user }) => {
  return <div data-testid="spinner">Loading...</div>;
});

describe('Home page component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.useRealTimers();
    cleanup();
  });

  it('should properly display error message on fetch error', async () => {
    axios.get.mockImplementationOnce(() => Promise.reject({ message: 'errorMessage' }));

    const { getAllByTestId, getByTestId } = render(
      <MemoryRouter keyLength={0}>
        <Home selectedNationalities={[]} />
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

    // Axios is correctly invoked
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      `https://randomuser.me/api/?page=1&results=${PAGE_SIZE}`
    );
  });

  it('should properly render a spinner while users are being fetched', async () => {
    axios.get.mockImplementationOnce(
      () => new Promise((resolve) => setTimeout(() => resolve(fetchMockedData), 5000))
    );

    const { debug, getAllByTestId, getByTestId } = render(
      <MemoryRouter keyLength={0}>
        <Home selectedNationalities={[]} />
      </MemoryRouter>
    );

    // Users wrapper is correctly rendered
    const home = await waitFor(() => getByTestId('home'));

    expect(home).toBeDefined();

    // Since the server response has been delayed 5 secs, the Spinner should be rendered
    const errorMessage = getByTestId('spinner');
    expect(errorMessage.textContent).toBe('Loading...');
  });

  it('should properly display users on successful fetch', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(fetchMockedData));

    const { getAllByTestId, getByTestId } = render(
      <MemoryRouter keyLength={0}>
        <Home selectedNationalities={[]} />
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

    // Axios is correctly invoked
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      `https://randomuser.me/api/?page=1&results=${PAGE_SIZE}`
    );
  });

  it('should properly display users with nationalities filter', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(fetchMockedData));

    const { getAllByTestId, getByTestId } = render(
      <MemoryRouter keyLength={0}>
        <Home selectedNationalities={NATIONALITIES} />
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

    // Axios is correctly invoked
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      `https://randomuser.me/api/?nat=${NATIONALITIES}&page=1&results=${PAGE_SIZE}`
    );
  });

  it('should properly apply the search filter', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(fetchMockedData));

    const { container, debug, getAllByTestId, getByTestId } = render(
      <MemoryRouter keyLength={0}>
        <Home selectedNationalities={[]} />
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
