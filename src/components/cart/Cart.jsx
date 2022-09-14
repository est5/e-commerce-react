import { useContext, useEffect } from 'react';
import { CartContext, CartDispatchContext } from '../../app/CartContext';

import './cart.css';
import CartCard from './CartCard';

function Cart({ beer }) {
  const cart = useContext(CartContext);

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
          price: b.price,
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
          return <CartCard c={c} key={c.id} />;
        }
      });
    });
  };

  let totalPrice = cart.reduce((prev, cur) => {
    if (cur) return prev + cur.total;
  }, 0);

  return (
    <div className="main">
      <h3>Корзина</h3>
      <p>
        {cart.length > 0
          ? `${cart.length} товар на сумму ${totalPrice.toFixed(2)}p`
          : 'Список товаров пуст'}
      </p>
      <main className="cart">{renderCart()}</main>
    </div>
  );
}

export default Cart;
