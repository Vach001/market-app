import { useState, useEffect } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import About from "../About/About";
import Products from "../Products/Products";
import ProductDetails from "../ProductDetails/ProductDetails";
import styles from "./Market.module.css";
import Cart from "../Cart/Cart";

function Market() {
  const [cart, setCart] = useState(function () {
    let savedCart = [];
    try {
      savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    } catch (error) {
      savedCart = [];
    }
    return savedCart;
  });

  useEffect(() => {
    if (cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  function handleProductDelete(id) {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  }

  function handleProductAdd(newProduct) {
    const existingProduct = cart.find(
      (product) => product.id === newProduct.id
    );
    if (existingProduct) {
      const updatedCart = cart.map((product) => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          ...newProduct,
          quantity: 1,
        },
      ]);
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar cart={cart} />
        <div className={styles.container}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/products"
              element={
                <Products
                  cart={cart}
                  onProductAdd={handleProductAdd}
                  onProductDelete={handleProductDelete}
                />
              }
            />
            <Route
              path="/products/:id"
              element={<ProductDetails onProductAdd={handleProductAdd} />}
            />
            <Route path="/cart" element={<Cart cart={cart} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
export default Market;
