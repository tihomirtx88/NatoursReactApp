/**
 * Sorts an array of tours based on a given criteria.
 *
 * @param {Array} tours - The array of tour objects to sort.
 * @param {string} sortBy - The criteria to sort by ("price", "duration", or "difficulty").
 * @returns {Array} - The sorted array of tours.
 */

export const sortTours = (tours, sortBy) => {
  const sortedTours = [...tours];

  switch (sortBy) {
    case "price":
      return sortedTours.sort((a, b) => a.price - b.price);
    case "duration":
      return sortedTours.sort((a, b) => a.duration - b.duration);
    case "difficulty":
      return sortedTours.sort((a, b) => {
        const difficulties = { easy: 1, medium: 2, difficult: 3 };
        return difficulties[a.difficulty] - difficulties[b.difficulty];
      });
    default:
      return tours; 
  }
};
