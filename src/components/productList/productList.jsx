import React from "react";

import ProductCard from "../productCard";
import "./productList.scss";

const ProductList = ({
  items,
  addToFavourite,
  favouriteItems,
  onClickBtn,
  btnContent,
}) => {
  const isItemInFavourite = (item) => {
    return favouriteItems.find(
      (favouriteItem) => favouriteItem.article === item.article
    );
  };

  return (
    <div className="products">
      <div className="products__list">
        {items.map((item) => (
          <ProductCard
            key={item.article}
            item={item}
            onClickStar={addToFavourite}
            onClickBtn={onClickBtn}
            isFavourite={isItemInFavourite(item)}
            btnContent={btnContent}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
