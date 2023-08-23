import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./Product.module.css"

export default function Product(props) {
  const { details } = props;

  const productFromCart = props.cart.find(
    (product) => product.id === details.id
  );
  const quantity = productFromCart ? productFromCart.quantity : 0;

  return (
    <div className={styles.product}>
      <div className={styles.productImageContainer}>
        <Link to={`/products/${details.id}`}>
          <img
            src={details.image}
            width="100"
            height="100"
            className={styles.productImage}
            alt={details.name}
          />
        </Link>
        {quantity > 0 && (
          <div className={styles.productQuantityContainer}>
            <div className={styles.productQuantity}>{quantity}</div>
          </div>
        )}
      </div>
      <div className={styles.productInfo}>
        <h3>{details.name}</h3>
        <p>{details.description}</p>
      </div>
      <div className={styles.productCheckout}>
        <div>
          {quantity > 0 && (
            <Button
              outline
              onClick={() => props.onProductDelete(details.id)}
              className={styles.productDelete}
            >
              X
            </Button>
          )}
        </div>
        <Button className={styles.productPrice} outline onClick={() => props.onProductAdd(details)}>
          ${details.price}
        </Button>
      </div>
    </div>
  );
}
