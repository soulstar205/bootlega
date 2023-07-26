import React, { useState, useContext } from 'react';
import { SearchContext } from '../../context/searchContext';
import './searchbar.css'

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const {FetchFunction} = useContext(SearchContext)

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    FetchFunction(searchValue)
  };

  return (
      <div className="form-container">
        <div className="container-inner">
          <div className="search-topic">
          <a href="https://clickworker.com" rel="nofollow"><h2>Free Movie Downloader</h2></a>
          </div>
            <form onSubmit={handleSubmit} className="search-form">
            <input
                type="text"
                placeholder="Search movie"
                value={searchValue}
                onChange={handleSearch}
            />
            <button type="submit">
                Search
            </button>
            </form>
        </div>
      </div>
  );
};

export default SearchBar;
