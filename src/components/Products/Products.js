/* eslint-disable array-callback-return */
import React from "react";
import Product from "../Products/Product/Product";
import { Container, Row, Col } from "react-bootstrap";
import "./Products.css";

export default function Products({ products, addToCart }) {
  return (
    <Container className="container">
      <Row>
        {products.map((product) => (
          <Col key={product.id}>
            <Product product={product} addToCart={addToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
