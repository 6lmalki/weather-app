import searchImage from "../assets/search.png";
import "../css/SearchForm.css";

const SearchForm = ({ search, setSearch, handleSearch }) => {
  return (
    <form className="search-form" onSubmit={handleSearch}>
      <input
        className="search-input"
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="search-button" type="submit">
        <img className="search-image" src={searchImage} alt="Search" />
      </button>
    </form>
  );
};

export default SearchForm;
