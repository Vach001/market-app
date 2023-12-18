import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import styles from "./Cart.module.css";
import Button from "../Button/Button.jsx";
import Input from "../Input/Input.jsx";

const stripeLoadedPromise = loadStripe(
  "pk_test_51L9BqvGbVclIjlflPWVP7ahSUrZlYjl9tyLj39O1P5yKBzCH4NOnJcTDKWlBYPSAJjoGz68LiT3rdJ21q1EkTuKi00asdGGVk4"
);
export default function Cart({ cart }) {
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity, 0);
  const [email, setEmail] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();

    const lineItems = cart.map((product) => {
      return { price: product.price_id, quantity: product.quantity };
    });
    stripeLoadedPromise.then((stripe) => {
      stripe
        .redirectToCheckout({
          lineItems,
          mode: "payment",
          successUrl: "http://localhost:3000/",
          cancelUrl: "http://localhost:3000/",
          customerEmail: email,
        })
        .then((response) => {
          console.log(response.error);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }
  return (
    <div className={styles.cartLayout}>
      <div>
        <h1>Your Cart</h1>
        {cart.length === 0 && (
          <p>You have not added any product to your cart yet.</p>
        )}
        {cart.length > 0 && (
          <>
            <table className={(styles.table, styles.tableCart)}>
              <thead>
                <tr>
                  <th width="25%" className={styles.thProduct}>
                    Product
                  </th>
                  <th width="20%">Unit price</th>
                  <th width="10%">Quanity</th>
                  <th width="25%">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => {
                  return (
                    <tr key={product.id}>
                      <td>
                        <img src={product.image} width="30" height="30" alt="Unable to show, please update!" 
                        />{" "}
                        {product.name}
                      </td>
                      <td>${product.price}</td>
                      <td>{product.quantity}</td>
                      <td>
                        <strong>${product.price * product.quantity}</strong>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan="2"></th>
                  <th className={styles.cartHighlight}>Total</th>
                  <th className={styles.cartHighlight}>${totalPrice}</th>
                </tr>
              </tfoot>
            </table>
            <form className={styles.payForm} onSubmit={handleFormSubmit}>
              <p>
                Enter your email and then click on pay and your products will be
                delivered to you on the same day!
                <br />
                <em>
                  Or click product button to continue shopping
                </em>
              </p>
              <Input
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                type="email"
                required
                className={styles.input}
              />
              <Button className={styles.btnPay} type="submit">Pay</Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}