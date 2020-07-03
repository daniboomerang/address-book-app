import filterUsers from './filteringUtils';
import { usersMockedData } from '../__mocks__/mocked-data';

describe('filter users', () => {
  it('should correctly filter users when the filter is a whitespace', () => {
    const filteredUsers = filterUsers(usersMockedData, '   ');
    expect(filteredUsers.length).toBe(usersMockedData.length);
  });

  it('should correctly filter users when the filter contains several words', () => {
    const filteredUsers = filterUsers(usersMockedData, 'ملینا simmon Jok');

    expect(`${filteredUsers[0].name.first} ${filteredUsers[0].name.last}`).toBe('Simmon Martin');
    expect(`${filteredUsers[1].name.first} ${filteredUsers[1].name.last}`).toBe('Lilja Jokela');
    expect(`${filteredUsers[2].name.first} ${filteredUsers[2].name.last}`).toBe(
      'Elizabeth Fitzsimmons'
    );
    expect(`${filteredUsers[3].name.first} ${filteredUsers[3].name.last}`).toBe('ملینا رضایی');
  });

  it('should correctly filter users when there is a mix of capital letters and whitespaces', () => {
    const filteredUsers = filterUsers(usersMockedData, 'ملینا  siMmon    JOk    ');

    expect(`${filteredUsers[0].name.first} ${filteredUsers[0].name.last}`).toBe('Simmon Martin');
    expect(`${filteredUsers[1].name.first} ${filteredUsers[1].name.last}`).toBe('Lilja Jokela');
    expect(`${filteredUsers[2].name.first} ${filteredUsers[2].name.last}`).toBe(
      'Elizabeth Fitzsimmons'
    );
    expect(`${filteredUsers[3].name.first} ${filteredUsers[3].name.last}`).toBe('ملینا رضایی');
  });
});
