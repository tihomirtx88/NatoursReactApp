/**
 * Sorts an array of users based on a given criteria.
 *
 * @param {Array} users - The array of user objects to sort.
 * @param {string} sortBy - The criteria to sort by ("name", "email", or "role").
 * @returns {Array} - The sorted array of users.
 */

export const sortUsers = (users, sortBy) => {
  const sortedUsers = [...users];

  switch (sortBy) {
    case "name":
      return sortedUsers.sort((a, b) => a.name.localeCompare(b.name));
    case "email":
      return sortedUsers.sort((a, b) => a.email.localeCompare(b.email));
    case "role":
      return sortedUsers.sort((a, b) => a.role.localeCompare(b.role));
    default:
      return users; 
  }
};