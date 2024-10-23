import SpinnerMini from "../../components/SpinnerMini";
import { useUsers } from "./useUsers";
import styles from "./AllUsers.module.scss";
import { useState } from "react";

export default function AllUsers() {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const { paginatedUsers, totalPages, currentPage, isLoadingUsers, error } =
    useUsers(sortBy, page, searchQuery);

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

  if (isLoadingUsers) {
    return <SpinnerMini />;
  }

  if (error) {
    return <div>Error loading tours</div>;
  }

  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <h1 className={styles["heading-primary"]}>
          <span className={styles["heading-primary--main"]}>All Users</span>
        </h1>
        <div className="section-controls">
          <label htmlFor="sortTours">Sort By:</label>
          <select
            id="sortTours"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Select...</option>
            <option value="name">Name</option>
            <option value="email">Email</option>
            <option value="role">Role</option>
          </select>
        </div>

        {/* Search bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search tours..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.container}>
        {paginatedUsers.length > 0 ? (
          paginatedUsers.map(({ _id, name, email, photo, role }) => (
            <div key={_id} className={styles.card}>
              <div className={styles["card__header"]}>
                <img
                  className={styles["card__avatar"]}
                  src={`http://localhost:3000/img/users/${photo}`}
                  alt={`${name} avatar`}
                  crossOrigin="anonymous"
                />
                <h2 className={styles["card__name"]}>{name}</h2>
              </div>

              <div className={styles["card__details"]}>
                <p className={styles["card__detail"]}>
                  <span>Email:</span> {email}
                </p>
                <p className={styles["card__detail"]}>
                  <span>Role:</span> {role}
                </p>
              </div>

              <div className={styles["card__actions"]}>
                <button className={`${styles.btn} ${styles["btn--update"]}`}>
                  Update
                </button>
                <button className={`${styles.btn} ${styles["btn--delete"]}`}>
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="TODO">No Tours Available</div>
        )}
      </div>

      {/* Pagination Controls */}
      <div className={styles.paginationControls}>
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
      <div className={styles.goToPage}>
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
    </section>
  );
}
