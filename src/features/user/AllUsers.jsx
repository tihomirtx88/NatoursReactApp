import SpinnerMini from "../../components/SpinnerMini";
import { useUsers } from "./useUsers";
import styles from "./AllUsers.module.scss";

export default function AllUsers() {
  const { allUsers, isLoadingUsers } = useUsers();

  if (isLoadingUsers) {
    return <SpinnerMini />;
  }

  const users = allUsers?.data?.users || [];
  console.log(users);
  

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
            // value={sortBy}
            // onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Select...</option>
            <option value="price">Price</option>
            <option value="duration">Duration</option>
            <option value="difficulty">Difficulty</option>
          </select>
        </div>

        {/* Search bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search tours..."
            // value={searchQuery}
            // onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.container}>
        {users.map(({ _id, name, email, photo, role }) => (
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
        ))}
      </div>
    </section>
  );
}
