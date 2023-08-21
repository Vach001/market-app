import Product from "./Product";
import useSWR from "swr";
import Loader from "../Components/Loader";
import fetcher from "./fetcher";

export default function Products(props) {
  const {
    data: products = [],
    loading,
    error,
  } = useSWR(
    "https://react-tutorial-demo.firebaseio.com/supermarket.json",
    fetcher
  );

//Hitesh's stripe account price id
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
    <div className="products-layout">
      <h1>Products</h1>
      <p>Take a look at our products</p>
      <div className="products-grid">
        {loading && <Loader />}
        {error && (
          <p>
            There was an error loading the products. Please try again later.
          </p>
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
