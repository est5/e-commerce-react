import Product from './product/Product';
import './products.css';

function Products({ beer }) {
  const renderProducts = () => {
    return beer.map((p) => (
      <Product
        id={p.id}
        favorite={p.favorite}
        image={p.img}
        meta={p.meta}
        name={p.name}
        price={p.price}
        key={p.id}
      />
    ));
  };

  return <section className="products">{renderProducts()}</section>;
}

export default Products;
