import './cart.css';
import Icon from './basket-svgrepo-com.svg';
import { useContext } from 'react';
import { CartContext } from '../../../app/CartContext';

function Cart() {
  const cart = useContext(CartContext);

  let sum = cart.reduce((prev, cur) => prev + cur.total, 0);

  return cart.length == 0 ? emptyCart() : filledCart(sum, cart.length);
}

function emptyCart() {
  return (
    <div className="favorite footer__entry">
      <span>Корзина</span>
      <img src={Icon} className="footer__img"></img>
    </div>
  );
}

function filledCart(total, len) {
  return (
    <div className="favorite footer__entry">
      <span>В корзине: {len}</span>
      <span>{total.toFixed(2)}p</span>
      <img src={Icon} className="footer__img"></img>
    </div>
  );
}

export default Cart;
