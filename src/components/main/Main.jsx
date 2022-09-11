import Products from './products/Products';
import Type from './type/Type';

import './main.css';

function Main() {
  return (
    <main className="main">
      <Type />
      <Products />
    </main>
  );
}

export default Main;
