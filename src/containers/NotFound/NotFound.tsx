import { useLocation } from 'react-router-dom';

import img from './img/error-404.svg';
import styles from './NotFound.module.css';

const NotFound = () => {
  const location = useLocation();

  return (
    <>
      <img src={img} alt="Not Found" className={styles.img} />
      <p className={styles.text}>
        No math for <u>{location.pathname}</u>
      </p>
    </>
  );
};

export default NotFound;
