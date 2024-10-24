/* eslint-disable react/prop-types */
import styles from "./UserCard.module.scss";

export const UserCard = ({ _id, name, email, photo, role }) => {
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
        <button className={`${styles.btn} ${styles["btn--update"]}`}>
          Update
        </button>
        <button className={`${styles.btn} ${styles["btn--delete"]}`}>
          Delete
        </button>
      </div>
    </div>
  );
};
