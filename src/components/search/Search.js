import { React, useState } from 'react';
import List from './List';
import './search.css';

function Search() {
  const [inputList, setInputList] = useState('');
  let inputHandler = (e) => {
    //convert input text to lower case
    let lowerCase = e.target.value.toLowerCase();
    setInputList(lowerCase);
  };
  return (
    <div className="main">
      <h1>Search Travel Packages</h1>
      <p>Try: Backpacking, Solo Adventures, Student Deals, All-Inclusive, Special Offers</p>
      <div className="search">
        <input
          type="text"
          class="searchTerm"
          onChange={inputHandler}
          placeholder="Which travel package are you looking for?"
        />
        <button type="submit" class="searchButton">
          <i className="for-search"></i>
        </button>
      </div>
      <div className="items-list">
        <List input={inputList} />
      </div>
    </div>
  );
}
export default Search;
