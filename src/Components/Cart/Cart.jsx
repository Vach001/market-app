import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import styles from "./Cart.module.css";
import Button from "../Button/Button";
import Input from "../Input/Input";

const stripeLoadedPromise = loadStripe(
  "pk_test_51L9BqvGbVclIjlflPWVP7ahSUrZlYjl9tyLj39O1P5yKBzCH4NOnJcTDKWlBYPSAJjoGz68LiT3rdJ21q1EkTuKi00asdGGVk4"
);
export default function Cart({ cart }) {
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const [email, setEmail] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();

    const lineItems = cart.map((product) => {
      return { price: product.price_id, quantity: product.quantity };
    });
    stripeLoadedPromise.then((stripe) => {
      stripe
        .redirectToCheckout({
          lineItems: lineItems,
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
        <h1>ԻՄ ԶԱՄԲՅՈՒՂԸ</h1>
        {cart.length === 0 && (
          <p>Դուք դեռ որևէ ապրանք չեք ավելացրել ձեր զամբյուղում:</p>
        )}
        {cart.length > 0 && (
          <>
            <table className={(styles.table, styles.tableCart)}>
              <thead>
                <tr>
                  <th width="25%" className={styles.thProduct}>
                    Ապրանք
                  </th>
                  <th width="20%">Միավորի գին</th>
                  <th width="10%">Քանակ</th>
                  <th width="25%">Ընդամենը</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => {
                  return (
                    <tr key={product.id}>
                      <td>
                        <img src={product.image} width="30" height="30" alt="Ապրանքի նկարն վնասված է" />
                        {" "}
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
                  <th className={styles.cartHighlight}>ԸՆԴԱՄԵՆԸ</th>
                  <th className={styles.cartHighlight}>${totalPrice}</th>
                </tr>
              </tfoot>
            </table>
            <form className={styles.payForm} onSubmit={handleFormSubmit}>
              <p>
                Գրե՛ք Ձեր էլ. հասցեն և սեխմեք վճարել: 
                Վճարումը կատարելուց հետո ապրանքը կառաքվի 1 օրվա ընթացքում:
                <br />
                <em>
                  Կամ սեխմեք Ապրանքներ կոճակին գնումները շարունակելու համար:
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
              <Button className={styles.btnPay} type="submit">ՎՃԱՐԵԼ</Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
