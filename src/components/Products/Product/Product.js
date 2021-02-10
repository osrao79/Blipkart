import React from "react";
import { Button } from "react-bootstrap";
import "./Product.css";

function Product({ product, addToCart }) {
  return (
    <div className="main">
      <div className="card">
        <img
          className="card-img-top"
          src={product.media.source}
          alt={product.name}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <div
            className="card-text"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>
          <Button
            variant="outline"
            className="cart-btn"
            onClick={() => addToCart(product.id, 1)}
          >
            Add To Cart
          </Button>
          <p className="card-title" id="item-price">
            {product.price.formatted_with_code}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
