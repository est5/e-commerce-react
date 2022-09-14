import { useContext, useEffect, useState } from 'react';
import { CartDispatchContext } from '../../app/CartContext';
import like from './heart-svgrepo-com.svg';

function CartCard({ c }) {
  const dispatcher = useContext(CartDispatchContext);
  const [total, setTotal] = useState(c.total);
  const [amount, setAmount] = useState(c.amount);

  const update = () =>
    dispatcher({
      type: 'changed',
      id: c.id,
      total: total,
      amount: amount,
    });

  useEffect(() => {
    setTotal(amount * c.price);
    update();
  }, [amount, total]);

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
          <span className="cart__price">На сумму {total.toFixed(2)}p</span>
          <div className="cart__sum">
            <button
              onClick={() => {
                setAmount(amount - 1 < 0 ? 0 : amount - 1);
              }}
            >
              {' '}
              -{' '}
            </button>
            <span className="cart__btn">{amount}</span>
            <button
              onClick={() => {
                setAmount(amount + 1);
              }}
            >
              {' '}
              +{' '}
            </button>
          </div>
        </div>
      </div>
      <img className="cart__delete"></img>
    </div>
  );
}

export default CartCard;
