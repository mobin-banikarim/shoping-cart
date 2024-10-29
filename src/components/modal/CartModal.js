import React from "react";
import ReactDOM from "react-dom";
import styles from './CartModal.module.css';
import { useSelector , useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { cartActions } from "../../store/cart-slice";

const CartModal = () => {

  let cartSelector = useSelector(state => state.cart.items);
  let totalQuantitySelector = useSelector(state => state.cart.totalQuantity);
  let dispatch = useDispatch();

  let closeCartHandler = () => {
    dispatch(uiActions.toggle());
  }

  let addToCartHandler = (item) => {
    dispatch(cartActions.addToCart({
        id    : item.id,
        title : item.title,
        price : item.price,
        image : item.img
    }));
  }

  let removeToCartHandler = (item) => {
    dispatch(cartActions.removeToCart({
        id    : item.id,
        title : item.title,
        price : item.price,
        image : item.img
    }));
  }

  let viewCartItems = cartSelector.map(item => (
    <div className={styles.cart}>
      <img src={item.image} alt={item.name} className={styles.img} />
      <h3 className={styles.cart_title}>{ item.name }</h3>
      <div className={styles.btn_cantainer}>
        <button className={styles.btn} onClick={() => addToCartHandler(item)}>+</button>
        <p>{ item.quantity }</p>
        <button className={styles.btn} onClick={() => removeToCartHandler(item)}>-</button>
      </div>
      <p className={styles.price}>${ item.totalPrice.toFixed(2) }</p>
    </div>
  ))

  return ReactDOM.createPortal(
    <div className={styles.modal_container}>
      
      <div className={styles.header_cart}>
        <h2>Cart List</h2>
        <button className={styles.close_btn} onClick={closeCartHandler}>X</button>
      </div>

      { totalQuantitySelector === 0 ? <h3>The shopping cart is empty.</h3> : viewCartItems }

    </div>,
    document.getElementById("modal-root")
  );
};

export default CartModal;
