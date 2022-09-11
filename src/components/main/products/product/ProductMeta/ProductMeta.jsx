import './meta.css';
import Russia from './Russia.jpg';

function ProductMeta() {
  return (
    <div className="meta-info">
      <img src={Russia} className="meta-info__flag"></img>
      <span className="meta-info__text">Россия, 0.45л., 5%</span>
    </div>
  );
}

export default ProductMeta;
