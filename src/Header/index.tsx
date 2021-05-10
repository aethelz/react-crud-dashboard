import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <img
        alt="Alasco"
        src="https://www.alasco.de/wp-content/uploads/2019/11/Logotype.png"
      />
    </div>
  );
};

export default Header;
