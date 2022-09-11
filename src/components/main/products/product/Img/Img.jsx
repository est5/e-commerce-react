import './img.css';
import img from './zhigulevskoe_bochkovoe_23032022.jpg';

function Img() {
  return <img loading="lazy" className="product-img" src={img}></img>;
}

export default Img;
