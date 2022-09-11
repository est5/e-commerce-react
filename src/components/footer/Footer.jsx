import Cart from './cart/Cart';
import Catalog from './catalog/Catalog';
import Favorite from './favorite/Favorite';

import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <Catalog />
      <Cart />
      <Favorite />
    </footer>
  );
}

export default Footer;
