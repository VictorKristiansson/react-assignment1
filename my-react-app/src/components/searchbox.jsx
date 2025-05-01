import "../components/searchbox.css";

const SearchBox = ({ onSearch }) => (
  <div className="searchbox-container">
    <input
      type="text"
      placeholder="Search..."
      onChange={(e) => onSearch(e.target.value)}
      className="searchbox-input"
    />
  </div>
);

export default SearchBox;
