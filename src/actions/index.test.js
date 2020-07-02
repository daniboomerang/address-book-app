import { ADD_NATIONALITY, REMOVE_NATIONALITY, SWISS } from '../constants';
import * as actions from './index';

describe('nationality actions', () => {
  it('addNationality should create ADD_NATIONALITY action', () => {
    expect(actions.addNationality(SWISS)).toEqual({
      type: ADD_NATIONALITY,
      nationality: SWISS,
    });
  });

  it('removeNationality should create REMOVE_NATIONALITY action', () => {
    expect(actions.removeNationality(SWISS)).toEqual({
      type: REMOVE_NATIONALITY,
      nationality: SWISS,
    });
  });
});
