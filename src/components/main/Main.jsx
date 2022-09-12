import Products from './products/Products';
import Type from './type/Type';

import './main.css';

function Main({ beer }) {
  return (
    <main className="main">
      <Type />
      <Products beer={beer} />
    </main>
  );
}

export default Main;
