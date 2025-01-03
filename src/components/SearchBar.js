import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <form>
        <input
          type="text"
          placeholder="Enter movie title"
          value={query}
          onChange={handleInputChange}
        />
      </form>
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default SearchBar;
