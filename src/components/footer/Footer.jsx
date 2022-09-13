import { Link } from 'react-router-dom';
import Cart from './cart/Cart';
import Catalog from './catalog/Catalog';
import Favorite from './favorite/Favorite';

import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <Link to="/">
        <Catalog />
      </Link>
      <Link to="/cart">
        <Cart />
      </Link>
      <Link to="/favorite">
        <Favorite />
      </Link>
    </footer>
  );
}

export default Footer;
