import Product from './product/Product';
import './products.css';

function Products() {
  return (
    <section className="products">
      <Product />
      <Product />
      <Product />
    </section>
  );
}

export default Products;
