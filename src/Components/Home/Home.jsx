import { Link } from "react-router-dom";
import styles from "./Home.module.css"

export default function Home() {
  return (
    <div className={styles.homeLayout}>
      <div>
        <h1>Օնլայն Գնումներ</h1>
        <p>
          Կատարե՛ք Ձեր գնումներն <em>Smail</em> խանութից առցանց, առնվազն 10000 ՀՀ դրամի և ստացե՛ք առաքման ծառայություն՝ Հաղարծնից մինչև 10 կմ-ը ԱՆՎՃԱՐ:
        </p>
        <Link to="/products" className={styles.btn}>
          Կատարել գնումներ
        </Link>
      </div>
      <img
        src="https://www.freepnglogos.com/uploads/smile-png/smile-mother-badge-honor-jewish-mom-6.png"
        width="350"
        height="350"
        className={(styles.rounded, styles.homeImage)}
        alt="Գլխավոր նկարն բացակայում է..."
      />
    </div>
  );
}