import { useReducer } from 'react';
import './App.css';
import { CartContext, CartDispatchContext } from './app/CartContext';
import cartReducer from './app/cartReducer';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {
  const [cart, dispatch] = useReducer(cartReducer, InitialCart);

  return (
    <div className="container">
      <Header />
      <CartContext.Provider value={cart}>
        <CartDispatchContext.Provider value={dispatch}>
          <Main />
          <Footer />
        </CartDispatchContext.Provider>
      </CartContext.Provider>
    </div>
  );
}

const InitialCart = [];
export default App;
