import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { usePosts } from "../../PostsContext";

export function SectionFilters() {
  const { getSortPosts, getSearchPosts, handleLimitPostsPage } = usePosts();
  const [inputValue, setInputValue] = useState('');
  const [isSpinner, setIsSpinner] = useState(false);

  const debounced = useDebouncedCallback(
    (inputValue) => {
      setIsSpinner(true);
      setInputValue(inputValue);
      getSearchPosts(inputValue);
    },500);

   return (
      <div className="uk-margin-medium-bottom uk-flex">
          <form className="uk-search uk-search-default uk-width-medium uk-margin-remove uk-margin-right">
            <span uk-search-icon="true"></span>
              {isSpinner && <span
                className="uk-search-icon uk-search-icon-flip"
                uk-spinner="ratio: 0.6"
              ></span>}
              <input className="uk-search-input" type="search" placeholder="Search..."
                value={inputValue}
               onChange={(e) => debounced(e.target.value)}
               onBlur={(e) => { setIsSpinner(false)}}/>
            </form>
            <select className="uk-select uk-width-small uk-margin-auto-left"
            onChange={(e)=> getSortPosts(e.target.value)}>
              <option value="asc">ASC</option>
              <option value="desc">DESC</option>
            </select>
            <select className="uk-select uk-width-small uk-margin-left"
            onChange={(e)=> handleLimitPostsPage(e.target.value)}>
              <option value="6">6</option>
              <option value="12">12</option>
              <option value="24">24</option>
            </select>
            <div className="uk-button-group uk-margin-left">
              <button className="uk-button uk-button-default">
              <a href="Posts-grid" uk-icon="icon:  grid"></a>
              </button>
              <button className="uk-button uk-button-default">
                <a href="/" uk-icon="icon:  list"></a>
              </button>
         </div>
      </div>
   )
}