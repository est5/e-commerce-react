import { useContext, useEffect } from 'react';
import { CartContext, CartDispatchContext } from '../../app/CartContext';
import like from './heart-svgrepo-com.svg';

import './cart.css';

function Cart({ beer }) {
  const cart = useContext(CartContext);
  const dispatcher = useContext(CartDispatchContext);

  let ids = cart.map((e) => {
    return { id: e.id, total: e.total, amount: e.amount };
  });

  let cartContent = ids.map((e) =>
    beer.map((b) => {
      if (b.id == e.id) {
        return {
          id: b.id,
          img: b.img,
          name: b.name,
          meta: b.meta,
          favorite: b.favorite,
          total: e.total,
          amount: e.amount,
        };
      }
      return null;
    })
  );

  const renderCart = () => {
    return cartContent.map((arr) => {
      return arr.map((c) => {
        if (c) {
          return (
            <div className="cart__card" key={c.id}>
              <img className="cart__like" src={like}></img>
              <img className="cart__img" src={c.img}></img>
              <div className="cart__info">
                <div className="cart__text">
                  <span className="cart__name">{c.name}</span>
                  <span className="cart__meta">{c.meta}</span>
                </div>
                <div className="cart__buy">
                  <span className="cart__price">На сумму {c.total}p</span>
                  <div className="cart__sum">
                    <button> - </button>
                    <span className="cart__btn">{c.amount}</span>
                    <button> + </button>
                  </div>
                </div>
              </div>
              <img className="cart__delete"></img>
            </div>
          );
        }
      });
    });
  };

  let total = cart.reduce((prev, cur) => {
    if (cur) return prev + Number.parseFloat(cur.total);
  }, 0);

  return (
    <div className="main">
      <h3>Корзина</h3>
      <p>
        {cart.length > 0
          ? `${cart.length} товар на сумму ${Number.parseFloat(total).toFixed(
              2
            )}p`
          : 'Список товаров пуст'}
      </p>
      <main className="cart">{renderCart()}</main>
    </div>
  );
}

export default Cart;
