import './cart.css';
import Icon from './basket-svgrepo-com.svg';

function Cart() {
  return (
    <div className="favorite footer__entry">
      <span>Корзина</span>
      <img src={Icon} className="footer__img"></img>
    </div>
  );
}

export default Cart;
