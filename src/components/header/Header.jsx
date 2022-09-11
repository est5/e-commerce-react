import Menu from './menu/Menu';
import Search from './search/Search';
import Title from './title/Title';
import './header.css';

function Header() {
  return (
    <header>
      <Menu />
      <Title />
      <Search />
    </header>
  );
}

export default Header;
