/**
 * Sorts an array of users based on a given criteria.
 *
 * @param {Array} users - The array of user objects to sort.
 * @param {string} sortBy - The criteria to sort by ("name", "email", or "role").
 * @returns {Array} - The sorted array of users.
 */

export const sortTours = (users, sortBy) => {
    const sortedUsers = [...users];
  
    switch (sortBy) {
      case "price":
        return sortedUsers.sort((a, b) => a.name - b.name);
      case "duration":
        return sortedUsers.sort((a, b) => a.email - b.email);
      case "difficulty":
        return sortedUsers.sort((a, b) => a.role - b.role);
      default:
        return users; 
    }
  };