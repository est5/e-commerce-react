import Products from './products/Products';
import Type from './type/Type';

import './main.css';
import Cart from '../cart/Cart';
import Favorite from '../favorite/Favorite';

function Main({ beer, render }) {
  const mainSection = () => {
    switch (render) {
      case 'catalog':
        return (
          <>
            <Type />
            <Products beer={beer} favOnly={false} />
          </>
        );
      case 'cart':
        return <Cart beer={beer} />;
      case 'favorite':
        return <Products beer={beer} favOnly={true} />;
    }
  };

  return <main className="main">{mainSection()}</main>;
}

export default Main;
