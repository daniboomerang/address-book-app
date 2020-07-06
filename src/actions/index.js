import { ADD_NATIONALITY, REMOVE_NATIONALITY } from '../constants';

/**
 * Adds a nationality to the current selected nationalities state.
 * @param {string} nationality - Nationality to be added
 */
const addNationality = (nationality) => ({ type: ADD_NATIONALITY, nationality });

/**
 * Removes a nationality from the current selected nationalities state.
 * @param {string} nationality - Nationality to be removed
 */
const removeNationality = (nationality) => ({ type: REMOVE_NATIONALITY, nationality });

export { addNationality, removeNationality };
