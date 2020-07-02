import nationalities from './nationalities';
import { ADD_NATIONALITY, REMOVE_NATIONALITY, BRITISH, SWISS, SPANISH, FRENCH } from '../constants';

describe('nationalities reducer', () => {
  it('should handle initial state', () => {
    expect(nationalities(undefined, {})).toEqual([]);
  });

  it('should handle ADD_NATIONALITY', () => {
    expect(
      nationalities([], {
        type: ADD_NATIONALITY,
        nationality: SPANISH,
      })
    ).toEqual([SPANISH]);

    expect(
      nationalities([SWISS], {
        type: ADD_NATIONALITY,
        nationality: SPANISH,
      })
    ).toEqual([SWISS, SPANISH]);

    expect(
      nationalities([SWISS, SPANISH], {
        type: ADD_NATIONALITY,
        nationality: FRENCH,
      })
    ).toEqual([SWISS, SPANISH, FRENCH]);
  });

  it('should handle REMOVE_NATIONALITY', () => {
    expect(
      nationalities([SWISS, SPANISH, BRITISH, FRENCH], {
        type: REMOVE_NATIONALITY,
        nationality: FRENCH,
      })
    ).toEqual([SWISS, SPANISH, BRITISH]);
  });
});
