import Button from "../Button/Button.jsx";
import styles from "./ProductDetailInfo.module.css"

export default function ProductDetailInfo({ product, onProductAdd }) {
  return (
    <>
      <p>
        {product.description} sold by <strong>${product.price}</strong> value.
      </p>
      <Button 
      className={styles.btn}
      onClick={() => onProductAdd(product)}>${product.price}</Button>
    </>
  );
}