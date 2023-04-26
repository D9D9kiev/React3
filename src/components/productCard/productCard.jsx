import React from "react";

import { ReactComponent as StarSvg } from "../../img/star.svg";
import Button from "../button/button";

const ProductCard = ({
  item,
  item: { article, name, price, image, color },
  isFavourite,
  onClickBtn,
  onClickStar,
  btnContent: { backGroundColor, title },
}) => {
  const clickBtn = () => {
    onClickBtn(item, `${name} (${color})`);
  };

  const clickStar = () => {
    onClickStar(item);
  };

  return (
    <div id={article} className="item">
      <div className="item__image">
        <img src={image} alt={name} width="350px" height="350px" />
      </div>
      <div className="item__info">
        <h2>
          {name} ({color})
        </h2>
        <p>{price}</p>
        <span onClick={clickStar}>
          {isFavourite ? <StarSvg fill="greenyellow" /> : <StarSvg />}
        </span>
      </div>
      <div className="item__buttons">
        <Button backGround={backGroundColor} title={title} onClick={clickBtn} />
      </div>
    </div>
  );
};

export default ProductCard;
