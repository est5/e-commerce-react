import icon from './heart-svgrepo-com.svg';
import Russia from './Russia.jpg';
import cart from './shopping-cart-outline-svgrepo-com.svg';
import plus from './plus-svgrepo-com.svg';
import minus from './minus-svgrepo-com.svg';

import './product.css';
import { useContext, useEffect, useRef, useState } from 'react';
import { CartContext, CartDispatchContext } from '../../../../app/CartContext';

function Product({ id, image, price, name, meta, favorite }) {
  const dispatch = useContext(CartDispatchContext);
  const store = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    let obj = store.find((e) => e.id == id);
    if (obj != null) {
      setAmount(obj.amount);
      setTotal(obj.total);
    }
  }, []);

  useEffect(() => setTotal(price * amount), [total, amount]);

  const addToCart = () => {
    setAmount(1);
    setTotal(price);
    dispatch({ type: 'changed', id: id, total: price, amount: 1 });
  };

  const addToCartAmount = () => {
    setTotal(Number.parseFloat(price) * amount);
    dispatch({ type: 'changed', id: id, total: total, amount: amount });
  };

  let render = store.find((e) => e.id === id);

  const btn = () => {
    return !render ? (
      <button className="add-btn" onClick={addToCart}>
        <span className="add-btn__text">В корзину</span>
        <img src={cart} className="add-btn__icon"></img>
      </button>
    ) : (
      <div className="add-btn add-btn--amount">
        <img
          src={minus}
          className="add-btn__icon--amount"
          onClick={() => setAmount(amount - 1 < 0 ? 0 : amount - 1)}
        ></img>
        <span className="add-btn__amount">{amount}</span>
        <img
          src={plus}
          className="add-btn__icon--amount "
          onClick={() => setAmount(amount + 1)}
        ></img>
        <button className="add-btn add-btn--amount">
          <img
            src={cart}
            className="add-btn__icon add-btn__icon--amount "
            onClick={addToCartAmount}
          ></img>
        </button>
      </div>
    );
  };

  return (
    <div className="card">
      <img className="like" src={icon}></img>
      <img loading="lazy" className="product-img" src={image}></img>
      <h3 className="product-name">{name}</h3>
      <div className="meta-info">
        <img src={Russia} className="meta-info__flag"></img>
        <span className="meta-info__text">{meta}</span>
      </div>
      <div className="price">
        <span>{price.split('.')[0]}.</span>
        <span>{price.split('.')[1]}P</span>
      </div>
      {btn()}
    </div>
  );
}

export default Product;
