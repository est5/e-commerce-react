import Icon from './icons8-menu.svg';
import './menu.css';

function Menu() {
  return (
    <section className="menu">
      <span className="menu__text">Menu</span>
      <img className="menu__icon" src={Icon} />
    </section>
  );
}

export default Menu;
