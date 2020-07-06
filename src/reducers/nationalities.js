import { ADD_NATIONALITY, REMOVE_NATIONALITY, BRITISH, FRENCH, SWISS, SPANISH } from '../constants';

// Swiss nationality is selected by default
const initialState = [BRITISH, FRENCH, SWISS, SPANISH];

/**
 * Nationalities reducer
 * @param {Array} state - The current state of nationalities
 * @param {Object} action - Contains the type and the nationality
 */
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
