import React from "react";
import "./Cart.css";
import CartItem from "../Cart/CartItems/CartItem";
import { Container, Row } from "react-bootstrap";

export default function Cart({ cart, removeCartItem, updateQuantity }) {
  const renderEmptyCart = () => {
    return <h5>Cart Is Empty</h5>;
  };

  if (!cart.line_items) return "Loading";
  const renderCart = () => (
    <Container>
      {cart.line_items.map((lineItem) => (
        <Row key={lineItem.id}>
          <CartItem
            item={lineItem}
            removeCartItem={removeCartItem}
            updateQuantity={updateQuantity}
          />
        </Row>
      ))}
      <div class="row" id="subtotal">
        <div class="col-6">
          <h3>Subtotal</h3>
        </div>
        <div class="col-4">
          <h3>{cart.subtotal.formatted_with_code}</h3>
        </div>
      </div>
      <div className="checkout">
        <button className="btnCheck">Checkout</button>
      </div>
    </Container>
  );

  return (
    <Container className="container">
      {!cart.line_items.length ? renderEmptyCart() : renderCart()}
    </Container>
  );
}
