import React from "react";
import ProductList from "../../components/productList";

import "./Favourites.scss";

const Favourites = ({ addToCartModal, addToFavourite, favouriteItems }) => {
  return (
    <>
      {favouriteItems.length > 0 ? (
        <ProductList
          items={favouriteItems}
          onClickBtn={addToCartModal}
          addToFavourite={addToFavourite}
          favouriteItems={favouriteItems}
          btnContent={{ backGroundColor: "red", title: "Add to Cart" }}
        />
      ) : (
        <div className="products__list--empty">No products in favourites</div>
      )}
    </>
  );
};

export default Favourites;
