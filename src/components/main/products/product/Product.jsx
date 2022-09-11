import AddToCart from './AddToCart/AddToCard';
import Img from './Img/Img';
import Like from './Like/Like';
import ProductMeta from './ProductMeta/ProductMeta';
import ProductName from './ProductName/ProductName';
import ProductPrice from './ProductPrice/ProductPrice';

import './product.css';

function Product() {
  return (
    <div className="card">
      <Like />
      <Img />
      <ProductName />
      <ProductMeta />
      <ProductPrice />
      <AddToCart />
    </div>
  );
}

export default Product;
