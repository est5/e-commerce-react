import { useContext, useEffect, useState } from 'react';
import { CartDispatchContext } from '../../app/CartContext';
import {
  FavoriteContext,
  FavoriteDispatchContext,
} from '../../app/FavoriteContext';

import like from './heart-svgrepo-com.svg';
import liked from './heart-filled.svg';

function CartCard({ c }) {
  const dispatcher = useContext(CartDispatchContext);
  const favStore = useContext(FavoriteContext);
  const favDispatch = useContext(FavoriteDispatchContext);
  const [total, setTotal] = useState(c.total);
  const [amount, setAmount] = useState(c.amount);
  const [fav, setFav] = useState(false);

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

  useEffect(() => {
    const favChecked = favStore.find((e) => e.id == c.id);
    if (favChecked) {
      setFav(favChecked.fav);
    }
  }, []);

  const flip = () => {
    setFav(!fav);
  };

  useEffect(
    () =>
      favDispatch({
        type: 'flip',
        id: c.id,
        fav: fav,
      }),
    [fav]
  );

  return (
    <div className="cart__card" key={c.id}>
      {fav ? (
        <img onClick={() => flip()} className="cart__like" src={liked}></img>
      ) : (
        <img onClick={() => flip()} className="cart__like" src={like}></img>
      )}
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
