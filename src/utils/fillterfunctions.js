/**
 * Filters the array of tours based on specified criteria.
 * 
 * @param {Array} tours - The array of tour objects.
 * @param {Object} criteria - The criteria to filter by.
 * @param {number} [criteria.duration] - The minimum duration to filter by.
 * @param {string} [criteria.name] - The substring to filter names by.
 * @returns {Array} - The filtered array of tour objects.
 */

export const filterTours = (tours, criteria) => {
    return tours.filter(tour => {
        const matchesDuration = criteria.duration ? tour.duration >= criteria.duration : true;
        const matchesName = criteria.name ? tour.name.toLowerCase().includes(criteria.name.toLowerCase()) : true;
        return matchesDuration && matchesName;
    });
};