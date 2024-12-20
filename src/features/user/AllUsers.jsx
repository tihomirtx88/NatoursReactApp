import SpinnerMini from "../../components/SpinnerMini";
import { useUsers } from "./useUsers";
import styles from "./AllUsers.module.scss";
import { useState } from "react";
import { UserCard } from "./UserCard";
import Modal from "./Modal";
import UpdateUserForm from "./UpdateUserForm";

export default function AllUsers() {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Manage modal state and the active userId
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeUserId, setActiveUserId] = useState(null);

  const { paginatedUsers, totalPages, currentPage, isLoadingUsers, error } =
    useUsers(sortBy, page, searchQuery);

  const openModal = (userId) => {
    setIsModalOpen(true);
    setActiveUserId(userId);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveUserId(null);
  };

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
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.container}>
        {paginatedUsers.length > 0 ? (
          paginatedUsers.map(({ _id, name, email, photo, role }) => (
            <UserCard
              key={_id}
              _id={_id}
              name={name}
              email={email}
              photo={photo}
              role={role}
              openModal={() => openModal(_id)}
            />
          ))
        ) : (
          <div className="TODO">No Users Available</div>
        )}
      </div>

      {/* Modal with UpdateUserForm */}
      {isModalOpen && activeUserId && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <UpdateUserForm userId={activeUserId} />
        </Modal>
      )}

      {/* Pagination Controls */}
      <div className={styles.paginationControls}>
        <button type="button"
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
          type="button"
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
          value={page}
          onChange={(e) => handleGoToPage(Number(e.target.value))}
          min="1"
          max={totalPages}
        />
      </div>
    </section>
  );
}
