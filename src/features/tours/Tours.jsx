import { useState } from "react";
import TourCard from "../../features/tours/TourCard";
import { useTours } from "../../features/tours/useTours";


const Tours = () => {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState('');

  const { paginatedTours, totalPages, currentPage, isFetching, error } = useTours(sortBy, page);
  console.log(paginatedTours, 'dsadsadsa');
  

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleGoToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setPage(pageNumber);
    }
  };

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading tours</div>;
  }

  return (
    <div className="tours-page">
      <div className="section-controls">
        <label htmlFor="sortTours">Sort By:</label>
        <select
          id="sortTours"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Select...</option>
          <option value="price">Price</option>
          <option value="duration">Duration</option>
          <option value="difficulty">Difficulty</option>
        </select>
      </div>

      <div className="card-container">
        {paginatedTours.length > 0 ? (
          paginatedTours.map((tour) => <TourCard key={tour._id} tour={tour} />)
        ) : (
          <div className="TODO">No Tours Available</div>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="pagination-controls">
        <button
          className="btn-pagination"
          onClick={handlePreviousPage}
          disabled={page === 1}
        >
          Previous
        </button>
        <span className="pagination-info">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="btn-pagination"
          onClick={handleNextPage}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>

      {/* Optionally, a way to go to a specific page */}
      <div className="go-to-page">
        <label>Go to Page: </label>
        <input
          className="go-to-page-input"
          type="number"
          value={currentPage}
          onChange={(e) => handleGoToPage(Number(e.target.value))}
          min="1"
          max={totalPages}
        />
      </div>
    </div>
  );
};

export default Tours;
