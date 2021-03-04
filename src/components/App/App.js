import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "../Products/Products";
import Navbar from "../Navbar/Navbar";
import Commerce from "@chec/commerce.js";
import Cart from "../Cart/Cart";

const commerce = new Commerce(
  "pk_226109d30e81fa219207a2dbb2e06ec1d2a387038a2d6"
);

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  // Fetching all the products from Database
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  // Adding Item to the Cart by ProductID
  const addToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item);
  };

  //fetching Item from Cart
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  //Removing item from Cart
  const removeCartItem = async (productId) => {
    const cart = await commerce.cart.remove(productId);
    setCart(cart);
  };

  //updating quantity in cart
  const updateQuantity = async (lineItemId, quantity) => {
    const cart = await commerce.cart.update(lineItemId, { quantity });
    setCart(cart);
  };
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [cart]);

  return (
    <Router>
      <div>
        <Navbar cartItemNo={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Products products={products} addToCart={addToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              removeCartItem={removeCartItem}
              updateQuantity={updateQuantity}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
