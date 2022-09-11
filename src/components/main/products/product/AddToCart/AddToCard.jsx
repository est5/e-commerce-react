import './add.css';
import cart from './shopping-cart-outline-svgrepo-com.svg';

function AddToCart() {
  return (
    <button className="add-btn">
      <span className="add-btn__text">В корзину</span>
      <img src={cart} className="add-btn__icon"></img>
    </button>
  );
}

export default AddToCart;
