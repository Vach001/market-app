import {
  NavLink,
  Routers,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import ProductDetailInfo from "../ProductDetailInfo/ProductDetailInfo";
import ProductDetailNutrition from "../ProductDetailNutrition/ProductDetailNutrition";
import ProductDetailStorage from "../ProductDetailStorage/ProductDetailStorage";
import useSWR from "swr";
import fetcher from "../../helpers/fetcher.js";
import styles from "./ProductDetails.module.css";

export default function ProductDetails(props) {
  const params = useParams();
  const match = useRouteMatch();

  const { data: product = {}, error } = useSWR(
    `https://react-tutorial-demo.firebaseio.com/productinfo/id${params.id}.json`,
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
              <NavLink exact activeClassName={styles.tabActive} to={match.url}>
                Մանրամասներ
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName={styles.tabActive}
                to={match.url + "/nutrition"}
              >
                Սննդային արժեքը
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName={styles.tabActive}
                to={match.url + "/storage"}
              >
                Պահպանման պայմաններ
              </NavLink>
            </li>
          </ul>
        </div>
        <Routers>
          <Route exact path={match.path}>
            <ProductDetailInfo
              onProductAdd={props.onProductAdd}
              product={product}
            />
          </Route>

          <Route path={match.path + "/nutrition"}>
            <ProductDetailNutrition nutrition={product.nutrition} />
          </Route>

          <Route path={match.path + "/storage"}>
            <ProductDetailStorage storage={product.storage} />
          </Route>
        </Routers>
      </div>
    </div>
  );
}
