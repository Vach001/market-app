import Button from "../Button/Button";

export default function ProductDetailInfo({ product, onProductAdd }) {
  return (
    <>
      <p>
        {product.description} Վաճառվել է <strong>${product.price}</strong> Արժեքով
      </p>
      <Button onClick={() => onProductAdd(product)}>${product.price}</Button>
    </>
  );
}