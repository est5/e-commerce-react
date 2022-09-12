import img from './zhigulevskoe_bochkovoe_23032022.jpg';
import icon from './heart-svgrepo-com.svg';
import Russia from './Russia.jpg';
import cart from './shopping-cart-outline-svgrepo-com.svg';

import './product.css';

function Product() {
  return (
    <div className="card">
      <img className="like" src={icon}></img>
      <img loading="lazy" className="product-img" src={img}></img>
      <h3 className="product-name">Пиво Жигулевское Бочковое светлое</h3>
      <div className="meta-info">
        <img src={Russia} className="meta-info__flag"></img>
        <span className="meta-info__text">Россия, 0.45л., 5%</span>
      </div>
      <div className="price">
        <span>14.</span>
        <span>88 P</span>
      </div>
      <button className="add-btn">
        <span className="add-btn__text">В корзину</span>
        <img src={cart} className="add-btn__icon"></img>
      </button>
    </div>
  );
}

export default Product;
