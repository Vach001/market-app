import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"

export default function Navbar(props) {
  const cartCount = props.cart.reduce(
    (total, product) => total + product.quantity, 0);

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.navBrand}>
      Smail Market
      </NavLink>
      <ul>
        <li className={styles.navItem}>
          <NavLink className={styles.active} to="/">
            Գլխավոր
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink className={styles.active} to="/about">
            Մեր մասին
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink className={styles.active} to="/products">
            Ապրանքներ
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className={(styles.navItem, styles.navCart, styles.btn, styles.btnAccent)}>
            Զամբյուղ ({cartCount})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
