import './catalog.css';
import Icon from './menu-svgrepo-com.svg';

function Catalog() {
  return (
    <div className="favorite footer__entry">
      <span>Каталог</span>
      <img src={Icon} className="footer__img"></img>
    </div>
  );
}

export default Catalog;
