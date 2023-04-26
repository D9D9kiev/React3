import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import StarSvg from "../../img/star.svg";
import "./header.scss";

const Header = ({ productsInCartLength, productsInFavouriteLength }) => {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <h1>Apple Store</h1>
        </Link>
      </div>
      <div className="header__items">
        <Link to="/cart">Cart</Link>
        <div className="item__cart">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1413/1413925.png"
            alt="cart"
            width="30px"
          ></img>
          <p>{`: ${productsInCartLength}`}</p>
        </div>
        <Link to="/favourites">Favourites</Link>
        <div className="item__favorite">
          <img src={StarSvg} width="30px" alt="star"></img>
          <p>{`: ${productsInFavouriteLength}`}</p>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  productsInCart: PropTypes.number,
  productsInFavourite: PropTypes.number,
};

export default Header;
