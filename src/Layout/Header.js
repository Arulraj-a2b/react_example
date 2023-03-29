import styles from "./header.module.css";
const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Goods and Service Tax</h1>
      <p className={styles.para}>Login</p>
    </div>
  );
};

export default Header;
