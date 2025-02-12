import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logoLink}>
        <img src="/gnx.svg" alt="Team GNX Logo" className={styles.logo} />
        <h1 className={styles.teamGnx}>GNX</h1>
      </Link>
    </header>
  );
};

export default Header;
