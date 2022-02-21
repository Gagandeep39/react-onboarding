import logo from '../logo.svg';
import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img src={logo} alt="Logo" />
      <h1>Eden</h1>
    </div>
  );
};

export default Logo;
