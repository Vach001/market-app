import { NavLink, Route, useParams, Routes } from "react-router-dom";
import ProductDetailInfo from "../ProductDetailInfo/ProductDetailInfo";
import ProductDetailNutrition from "../ProductDetailNutrition/ProductDetailNutrition";
import ProductDetailStorage from "../ProductDetailStorage/ProductDetailStorage";
import useSWR from "swr";
import fetcher from "../../helpers/fetcher.js";
import styles from "./ProductDetails.module.css";

export default function ProductDetails(props) {
  const params = useParams();
  // const match = useMatch();

  const { product = {}, error } = useSWR(
    `https://react-tutorial-demo.firebaseio.com/supermarket/id${params.id}/*.json`,
    fetcher
  );

  if (error) {
    return (
      <p>Ապրանքների բեռնումն ձախողվել է, խնդրում ենք փորձեք մի փոքր ուշ</p>
    );
  }

  return (
    <div className={styles.productDetailsLayout}>
      <div>
        <h2>{product.name}</h2>
        <img
          src={product.image}
          width="125"
          height="125"
          className={styles.productDetailsImage}
          alt={product.name}
        />
      </div>
      <div>
        <div className={styles.tabs}>
          <ul>
            <li>
              <NavLink className={styles.tabActive} to='/'>
                Մանրամասներ
              </NavLink>
            </li>
            <li>
              <NavLink
               className={styles.tabActive}
                to="nutrition"
              >
                Սննդային արժեքը
              </NavLink>
            </li>
            <li>
              <NavLink
                className={styles.tabActive}
                to="storage"
              >
                Պահպանման պայմաններ
              </NavLink>
            </li>
          </ul>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <ProductDetailInfo
                onProductAdd={props.onProductAdd}
                product={product}
              />
            }
          />
          <Route
            path="nutrition"
            element={<ProductDetailNutrition nutrition={product.nutrition} />}
          />
          <Route
            path="storage"
            element={<ProductDetailStorage storage={product.storage} />}
          />
        </Routes>
      </div>
    </div>
  );
}
