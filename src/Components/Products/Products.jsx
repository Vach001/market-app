import Product from "../Product/Product";
import useSWR from "swr";
import Loader from "../Loader/Loader";
import fetcher from "../../helpers/fetcher";
import styles from "./Products.module.css"

export default function Products(props) {
  const {
    data: products = [],
    loading,
    error,
  } = useSWR(
    "https://react-tutorial-demo.firebaseio.com/supermarket.json",
    fetcher
  );

let productStripeId = {
  cheese:'price_1LaKFcGbVclIjlflyQlSDi1L', 
  tomato:'price_1LaKG8GbVclIjlflF2N8MwAz', 
  pineapple:'price_1LaKH0GbVclIjlflytQaoOb6', 
  milk:'price_1LaKGWGbVclIjlfluo9gOr0l', 
};

products.forEach(product => {
  if (product.id === 1){
    product.price_id = productStripeId.cheese;
  }
  if (product.id === 2){
    product.price_id = productStripeId.milk;
  }
  if (product.id === 3){
    product.price_id = productStripeId.tomato;
  }
  if (product.id === 4){
    product.price_id = productStripeId.pineapple;
  }
 });
  console.log(products);

  return (
    <div className={styles.productsLayout}>
      <h1>Ապրանքներ</h1>
      <p>Հաճելի գնումներ</p>
      <div className={styles.productsGrid}>
        {loading && <Loader />}
        {error && (
          <p>Ապրանքները բեռնելիս սխալ տեղի ունեցավ: Խնդրում եմ փորձեք մի փոքր ուշ.</p>
        )}
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              details={product}
              cart={props.cart}
              onProductAdd={props.onProductAdd}
              onProductDelete={props.onProductDelete}
            />
          );
        })}
      </div>
    </div>
  );
}