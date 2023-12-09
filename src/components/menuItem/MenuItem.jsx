import { Link } from "react-router-dom";
import styles from "./menuItem.module.css";

function MenuItem({ name, to, onClick }) {
  if (to) {
    return (
      <Link to={to} className={styles.menuItem}>
        <span>{name}</span>
      </Link>
    );
  }
  return (
    <li className={styles.menuItem} onClick={onClick}>
      <span>{name}</span>
    </li>
  );
}

export default MenuItem;
