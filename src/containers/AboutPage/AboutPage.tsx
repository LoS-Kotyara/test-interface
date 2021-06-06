import styles from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <>
      <h1 className="header__text">About</h1>
      <div className={styles.content}>
        {`Web application to control LED strip.
        
        Build with React.
        `}
      </div>
    </>
  );
};

export default AboutPage;
