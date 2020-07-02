import { ADD_NATIONALITY, REMOVE_NATIONALITY } from '../constants';

const addNationality = (nationality) => ({ type: ADD_NATIONALITY, nationality });
const removeNationality = (nationality) => ({ type: REMOVE_NATIONALITY, nationality });

export { addNationality, removeNationality };
