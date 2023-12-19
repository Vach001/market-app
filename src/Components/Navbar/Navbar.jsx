import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"

export default function Navbar(props) {
  const cartCount = props.cart.reduce((total, product) => total + product.quantity, 0);

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.navBrand}>
      Smail Market
      </NavLink>
      <ul>
        <li className={styles.navItem}>
          <NavLink className={styles.active} to="/">
            Home
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink className={styles.active} to="/about">
            About us
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink className={styles.active} to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className={styles.navItem}>
            Cart ({cartCount})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}