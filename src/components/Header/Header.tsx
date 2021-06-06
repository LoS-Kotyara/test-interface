import { Link, NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link to="/">
          <h1>LED strip</h1>
        </Link>
      </div>

      <div className={styles.navBar}>
        <ul className={styles.list__container}>
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/controls" exact>
              Controls
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" exact>
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
