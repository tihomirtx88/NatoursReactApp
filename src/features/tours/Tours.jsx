import { useEffect, useState } from "react";
import Pagination from "../../utils/paginations";
import TourCard from "../../features/tours/TourCard";
import { useTours } from "../../features/tours/useTours";

const Tours = () => {
  const { tours } = useTours();
  const readingData = tours?.data?.tours || [];

  // State for pagination instance and current page
  const [pagination, setPagination] = useState(new Pagination([], 9));
  const [page, setPage] = useState(1); 
  console.log(readingData);

  useEffect(() => {
    setPagination(new Pagination(readingData, 9));
  }, [readingData]);

  // Get paginated tours for the current page
  const paginatedTours = pagination.getPaginatedItems();

  const handleNextPage = () => {
    // Create a new instance of Pagination with updated currentPage
    const newPagination = new Pagination(pagination.items, pagination.pageSize);
    newPagination.goToPage(pagination.currentPage + 1);
    setPagination(newPagination);
    setPage(newPagination.currentPage);
  };

  const handlePreviousPage = () => {
    const newPagination = new Pagination(pagination.items, pagination.pageSize);
    newPagination.goToPage(pagination.currentPage - 1);
    setPagination(newPagination);
    setPage(newPagination.currentPage);
  };

  const handleGoToPage = (pageNumber) => {
    // Create a new instance of Pagination with the specified page
    const newPagination = new Pagination(pagination.items, pagination.pageSize);
    newPagination.goToPage(pageNumber);
    setPagination(newPagination);
    setPage(newPagination.currentPage);
  };

  return (
    <div className="tours-page">
      <div className="section-header">
        <div className="header__hero">
          <div className="header__hero-overlay"></div>
          <img src="tour-header.jpg" alt="Tour Header" className="header__hero-img" />
        </div>
        <div className="heading-box">
          <h1 className="heading-box__group">Explore Our Tours</h1>
        </div>
      </div>

      <div className="section-description">
        <div className="card-container">
          {paginatedTours.length > 0 ? (
            paginatedTours.map((tour) => <TourCard key={tour._id} tour={tour} />)
          ) : (
            <div className="TODO">No Tours Available</div>
          )}
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="pagination-controls">
        <button
          className="btn-pagination"
          onClick={handlePreviousPage}
          disabled={pagination.isFirstPage()}
        >
          Previous
        </button>
        <span className="pagination-info">
          Page {pagination.currentPage} of {pagination.totalPages}
        </span>
        <button
          className="btn-pagination"
          onClick={handleNextPage}
          disabled={pagination.isLastPage()}
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
          value={pagination.currentPage}
          onChange={(e) => handleGoToPage(Number(e.target.value))}
          min="1"
          max={pagination.totalPages}
        />
      </div>
    </div>
  );
};

export default Tours;
