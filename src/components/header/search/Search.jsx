import Icon from './icons8-search.svg';
import './search.css';

function Search() {
  return (
    <section className="search">
      <span className="search__text">Поиск</span>
      <img className="search__icon" src={Icon} />
    </section>
  );
}

export default Search;
