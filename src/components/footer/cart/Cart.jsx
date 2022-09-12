import './cart.css';
import Icon from './basket-svgrepo-com.svg';
import { useContext } from 'react';
import { CartContext } from '../../../app/CartContext';

function Cart() {
  const cart = useContext(CartContext);

  return cart.length == 0 ? emptyCart() : filledCart(cart.length);
}

function emptyCart() {
  return (
    <div className="favorite footer__entry">
      <span>Корзина</span>
      <img src={Icon} className="footer__img"></img>
    </div>
  );
}

function filledCart(len) {
  return (
    <div className="favorite footer__entry">
      <span>{len}</span>
      <img src={Icon} className="footer__img"></img>
    </div>
  );
}

export default Cart;
