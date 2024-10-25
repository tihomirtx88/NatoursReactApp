/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useDeleteUser } from "./useDeleteUser";
import styles from "./UserCard.module.scss";

export const UserCard = ({ _id, name, email, photo, role }) => {
  const { isDeletingUser, deleteUser } = useDeleteUser();

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${name}?`
    );
    if (confirmDelete) {
      deleteUser(_id);
    }
  };

  return (
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
        <Link
          to={`/updateUser/${_id}`}
          className={`${styles.btn} ${styles["btn--update"]}`}
        >
          Update
        </Link>
        <button
          className={`${styles.btn} ${styles["btn--delete"]}`}
          onClick={handleDelete}
          disabled={isDeletingUser}
        >
          {isDeletingUser ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
};
