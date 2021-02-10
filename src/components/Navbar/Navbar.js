import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useHistory } from "react-router-dom";

export default function Navbar({ cartItemNo }) {
  console.log("cartItemNo", cartItemNo);
  const history = useHistory();
  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => history.push("/")}>
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        Blipkart
      </div>
      <button
        type="button"
        className="btn btn-link"
        onClick={() => history.push("/cart")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          color="gray"
          className="bi bi-bag-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
        </svg>
        <span className="badge">{cartItemNo}</span>
      </button>
    </nav>
  );
}
