import React from "react";
import "./CartItem.css";
function CartItem({ item, removeCartItem, updateQuantity }) {
  const handleUpdateQty = (lineItemId, newQuantity) =>
    updateQuantity(lineItemId, newQuantity);
  return (
    <div className="container" id="container">
      <div className="row" id="row">
        <div className="col-sm">
          <img src={item.media.source} alt={item.name} className="cartImage" />
        </div>
        <div className="col-sm">
          {" "}
          <h6 className="card-title" id="cardTitle">
            {item.name}
          </h6>
        </div>
        <div className="col-sm" id="btnCol">
          <button
            className="btn btn-s"
            className="quantityBtn"
            style={{ background: "#ff3f6c" }}
            onClick={() => {
              handleUpdateQty(item.id, item.quantity + 1);
            }}
          >
            +
          </button>
          <h5> {item.quantity}</h5>
          <button
            className="btn  btn-s"
            className="quantityBtn"
            style={{ background: "#ff3f6c" }}
          >
            -
          </button>
        </div>
        <div class="col-sm" id="itemPrice">
          <h6>{item.line_total.formatted_with_code}</h6>
        </div>
        <div class="col-sm" id="removeBtn">
          <button
            class="btn btn-primary"
            style={{ background: "#ff3f6c" }}
            onClick={() => removeCartItem(item.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
