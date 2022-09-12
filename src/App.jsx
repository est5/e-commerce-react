import { useReducer } from 'react';
import './App.css';
import { CartContext, CartDispatchContext } from './app/CartContext';
import cartReducer from './app/cartReducer';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';

import zhiguli from './assets/beer/zhigulevskoe_bochkovoe_23032022.jpg';

function App() {
  const [cart, dispatch] = useReducer(cartReducer, InitialCart);

  return (
    <div className="container">
      <Header />
      <CartContext.Provider value={cart}>
        <CartDispatchContext.Provider value={dispatch}>
          <Main beer={BEER} />
          <Footer />
        </CartDispatchContext.Provider>
      </CartContext.Provider>
    </div>
  );
}

const InitialCart = [];
let id = 0;

const BEER = [
  {
    id: ++id,
    img: zhiguli,
    price: '14.88',
    name: 'Пиво Жигулевское Бочковое светлое',
    meta: 'Россия, 0.45л., 5%',
    favorite: false,
  },
];

const PRODUCTS = {
  beer: BEER,
  vodka: null,
};

export default App;
