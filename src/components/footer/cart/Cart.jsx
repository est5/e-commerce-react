import './cart.css';
import Icon from './basket-svgrepo-com.svg';
import { useContext } from 'react';
import { CartContext } from '../../../app/CartContext';

function Cart() {
  const cart = useContext(CartContext);

  const filledCart = () => {
    let total = cart.reduce((prev, cur) => {
      return prev + cur.total;
    }, 0);

    return (
      <div className="favorite footer__entry">
        <span>В корзине: {cart.length}</span>
        <span>{total ? total.toFixed(2) : '0.00'}p</span>
        <img src={Icon} className="footer__img"></img>
      </div>
    );
  };

  function emptyCart() {
    return (
      <div className="favorite footer__entry">
        <span>Корзина</span>
        <img src={Icon} className="footer__img"></img>
      </div>
    );
  }

  return cart.length == 0 ? emptyCart() : filledCart();
}

export default Cart;
