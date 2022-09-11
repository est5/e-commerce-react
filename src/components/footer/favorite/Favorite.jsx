import './favorite.css';
import Icon from './heart-svgrepo-com.svg';

function Favorite() {
  return (
    <div className="favorite footer__entry">
      <span>Избранное</span>
      <img src={Icon} className="footer__img"></img>
    </div>
  );
}

export default Favorite;
