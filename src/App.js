import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import AppRoutes from "./appRoutes";
import Header from "./components/header";
import Modal from "./components/modal";

const getHistoryFromLS = (itemArr) => {
  const lsHistory = localStorage.getItem(itemArr);
  if (!lsHistory) {
    return [];
  }
  try {
    const value = JSON.parse(lsHistory);
    return value;
  } catch (error) {
    return [];
  }
};

const App = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [modalContent, setModalContent] = useState({});

  useEffect(() => {
    setIsLoading(true);
    setCart(getHistoryFromLS("cart"));
    setFavourites(getHistoryFromLS("favourites"));
    const fetchProducts = async () => {
      const response = await fetch("apple.json");
      const data = await response.json();
      setProducts(data.products);
      setIsLoading(false);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [cart, favourites]);

  const showModal = () => {
    setIsModalOpened(true);
  };

  const addToCartModal = (item, nameOfProduct) => {
    setModalContent({
      header: "Confirmation",
      text: `Add ${nameOfProduct} to cart?`,
      actions: (
        <>
          <button
            type="button"
            className="modal__content__btn"
            onClick={(event) => addToCart(item)}
          >
            Yes
          </button>
          <button
            type="button"
            className="modal__content__btn"
            onClick={closeModal}
          >
            No
          </button>
        </>
      ),
    });
    showModal();
  };

  const removeFromCartModal = (item, nameOfProduct) => {
    setModalContent({
      header: "Confirmation",
      text: `Remove ${nameOfProduct} from cart?`,
      actions: (
        <>
          <button
            type="button"
            className="modal__content__btn"
            onClick={(event) => removeFromCart(item)}
          >
            Yes
          </button>
          <button
            type="button"
            className="modal__content__btn"
            onClick={closeModal}
          >
            No
          </button>
        </>
      ),
    });
    showModal();
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  const addToCart = (item) => {
    const newCart = [...cart, item];
    setCart(newCart);
    closeModal();
  };

  const addToFavourite = (item) => {
    if (!favourites.find((favourite) => favourite.article === item.article)) {
      const newFavourites = [...favourites, item];
      setFavourites(newFavourites);
    } else {
      removeFromFavorite(item);
    }
  };

  const removeFromCart = (item) => {
    const indexOfItem = cart.findIndex(
      (cartItem) => cartItem.article === item.article
    );
    const newCart = [...cart];
    console.log(newCart);
    newCart.splice(indexOfItem, 1);
    setCart(newCart);
    closeModal();
  };

  const removeFromFavorite = (item) => {
    const newFavourites = favourites.filter(
      (favourite) => favourite.article !== item.article
    );
    setFavourites(newFavourites);
  };

  return (
    <>
      <Header
        productsInCartLength={cart.length}
        productsInFavouriteLength={favourites.length}
      />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <AppRoutes
          items={products}
          addToCartModal={addToCartModal}
          removeFromCartModal={removeFromCartModal}
          addToFavourite={addToFavourite}
          favouriteItems={favourites}
          cartItems={cart}
        />
      )}
      {isModalOpened && <Modal content={modalContent} close={closeModal} />}
    </>
  );
};

App.propTypes = {
  isLoading: PropTypes.bool,
  products: PropTypes.array,
  cart: PropTypes.array,
  favourites: PropTypes.array,
  isModalOpened: PropTypes.bool,
  modalContent: PropTypes.object,
};

export default App;
