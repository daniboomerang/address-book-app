/**
 * It filters users with first or last name contained in the filter parameter
 * @param {Object} users - The list of users to be filtered
 * @param {String} filter - The parameter used to filter users by first/last name
 */
const filterUsers = (users, filter) => {
  let filteredUsers;

  if (filter.length > 0) {
    // Search is case insensitive.
    const lowerCaseFilter = filter.toLowerCase();

    // We need to get all different words in the filter.
    // And we need to filter words that are NOT empty strings
    const wordsSearch = lowerCaseFilter.split(' ').filter((item) => item);

    // User might input one or more whitespace characters.
    // In that case we shall not proceed with the filtering
    if (!wordsSearch.length) {
      filteredUsers = users;
    } else {
      filteredUsers = users.filter(({ name: { first, last } }) => {
        // Determine if at least one word in filter is contained in user's first name
        const isFirstInFilter = wordsSearch.some((word) => first.toLowerCase().includes(word));

        // Determine if at least one word in filter is contained in user's last name
        const isLastInFilter = wordsSearch.some((word) => last.toLowerCase().includes(word));

        return isFirstInFilter || isLastInFilter;
      });
    }
  } else {
    filteredUsers = users;
  }
  return filteredUsers;
};

export default filterUsers;
