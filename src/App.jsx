import { useReducer } from 'react';
import './App.css';
import { CartContext, CartDispatchContext } from './app/CartContext';
import {
  FavoriteContext,
  FavoriteDispatchContext,
} from './app/FavoriteContext';

import cartReducer from './app/cartReducer';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';

import zhiguli from './assets/beer/zhigulevskoe_bochkovoe_23032022.jpg';

import zhiguliBarnoe from './assets/beer/zhiguli_barnoe_np_450ml_11102021.jpg';
import favReducer from './app/favReducer';

function App({ render }) {
  const [cart, cartDispatch] = useReducer(cartReducer, InitialCart);
  const [fav, favDispatch] = useReducer(favReducer, InitialFav);

  return (
    <div className="container">
      <Header />
      <FavoriteContext.Provider value={fav}>
        <FavoriteDispatchContext.Provider value={favDispatch}>
          <CartContext.Provider value={cart}>
            <CartDispatchContext.Provider value={cartDispatch}>
              <Main beer={BEER} render={render} />
              <Footer />
            </CartDispatchContext.Provider>
          </CartContext.Provider>
        </FavoriteDispatchContext.Provider>
      </FavoriteContext.Provider>
    </div>
  );
}

const InitialCart = [];
const InitialFav = [];
let id = 0;

const BEER = [
  {
    id: ++id,
    img: zhiguli,
    price: 109.99,
    name: 'Пиво Жигулевское Бочковое светлое',
    meta: 'Россия, 1.2л., 5%',
  },
  {
    id: ++id,
    img: zhiguliBarnoe,
    price: 59.99,
    name: 'Пиво Жигули Барное светлое фильтр. непастер.ст',
    meta: 'Россия, 0.45 л., 5.5%',
  },
];

const PRODUCTS = {
  beer: BEER,
  vodka: null,
};

export default App;
