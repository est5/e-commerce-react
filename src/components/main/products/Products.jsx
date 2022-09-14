import Product from './product/Product';
import './products.css';

function Products({ beer, favOnly }) {
  const renderProducts = () => {
    return beer.map((p) => (
      <Product
        id={p.id}
        image={p.img}
        meta={p.meta}
        name={p.name}
        price={p.price}
        key={p.id}
        favOnly={favOnly}
      />
    ));
  };

  return <section className="products">{renderProducts()}</section>;
}

export default Products;
