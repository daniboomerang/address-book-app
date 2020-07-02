import { ADD_NATIONALITY, REMOVE_NATIONALITY } from '../constants';

// Swiss nationality is selected by default
const initialState = [];

const nationalities = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NATIONALITY:
      return [...state, action.nationality];

    case REMOVE_NATIONALITY:
      return state.filter((nationality) => nationality !== action.nationality);

    default:
      return state;
  }
};

export default nationalities;
