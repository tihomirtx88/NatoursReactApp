/* eslint-disable react/prop-types */

const MontlyToursCard = ({ tour }) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const { month, numToursStats, tours } = tour;

  // Convert numerical month to month name
  const monthName = monthNames[month - 1]; // Array is 0-indexed, months start at 1

  return (
    <div className="tours-info">
      <h2 className="tours-info__heading">Tours for {monthName}</h2>
      <p className="tours-info__description">Total: {numToursStats}</p>
      <ul className="tours-info__list">
        {tours.map((tour, index) => (
          <li key={index} className="tours-info__item">
            {tour}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MontlyToursCard;
