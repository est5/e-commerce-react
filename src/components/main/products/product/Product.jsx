import icon from './heart-svgrepo-com.svg';
import Russia from './Russia.jpg';
import cart from './shopping-cart-outline-svgrepo-com.svg';

import './product.css';
import { useContext, useState } from 'react';
import { CartDispatchContext } from '../../../../app/CartContext';

function Product({ id, image, price, name, meta, favorite }) {
  const dispatch = useContext(CartDispatchContext);
  const [total, setTotal] = useState(Number.parseFloat(price));

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
      <button
        className="add-btn"
        onClick={() => {
          setTotal(total + Number.parseFloat(price));
          dispatch({ type: 'changed', id: id, total: total });
        }}
      >
        <span className="add-btn__text">В корзину</span>
        <img src={cart} className="add-btn__icon"></img>
      </button>
    </div>
  );
}

export default Product;
