import { NavLink, Route, useParams, Routes } from "react-router-dom";
import ProductDetailInfo from "../ProductDetailInfo/ProductDetailInfo.jsx";
import ProductDetailNutrition from "../ProductDetailNutrition/ProductDetailNutrition.jsx";
import ProductDetailStorage from "../ProductDetailStorage/ProductDetailStorage.jsx";
import useSWR from "swr";
import fetcher from "../../helpers/fetcher.js";
import styles from "./ProductDetails.module.css";

export default function ProductDetails(props) {
  const params = useParams();

  const { data: product = {}, error } = useSWR(
    `https://react-tutorial-demo.firebaseio.com/productinfo/id${params.id}/.json`,
    fetcher
  );
  if (error) {
    return (
      <p>Failed to load products, please try again later.</p>
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
              <NavLink className={styles.tabActive} to=''>
                Details
              </NavLink>
            </li>
            <li>
              <NavLink
               className={styles.tabActive}
                to="nutrition"
              >
                Nutritional value
              </NavLink>
            </li>
            <li>
              <NavLink
                className={styles.tabActive}
                to="storage"
              >
                Storage conditions
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
