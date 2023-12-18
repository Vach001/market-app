import { Link } from "react-router-dom";
import styles from "./Home.module.css"

export default function Home() {
  return (
    <div className={styles.homeLayout}>
      <div>
        <h1>Shopping Online</h1>
        <p>
         Make your purchases from <em>Smail</em> online store, at least AMD 10,000 and get FREE delivery service.
        </p>
        <Link to="/products" className={styles.btn}>
         Make purchases
        </Link>
      </div>
      <img
        src="https://www.freepnglogos.com/uploads/smile-png/smile-mother-badge-honor-jewish-mom-6.png"
        width="350"
        height="350"
        className={(styles.rounded, styles.homeImage)}
        alt="Unable to show, please update!"
      />
    </div>
  );
}