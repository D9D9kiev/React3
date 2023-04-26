import React from "react";
import ProductList from "../../components/productList";

const Home = ({ items, addToCartModal, addToFavourite, favouriteItems }) => {
  return (
    <>
      <ProductList
        items={items}
        onClickBtn={addToCartModal}
        addToFavourite={addToFavourite}
        favouriteItems={favouriteItems}
        btnContent={{ backGroundColor: "red", title: "Add to Cart" }}
      />
    </>
  );
};

export default Home;
