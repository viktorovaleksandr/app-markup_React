import { useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { usePosts } from "../../PostsContext";

export function SectionFilters() {
  const { getSortPosts, getSearchPosts, getLimitPage } = usePosts();
  const [inputValue, setInputValue] = useState('');

  const debounced = useDebouncedCallback(()=>getSearchPosts(inputValue),500);
  useEffect(() => debounced(),[inputValue]);

   return (
      <div className="uk-margin-medium-bottom uk-flex">
          <form className="uk-search uk-search-default uk-width-medium uk-margin-remove uk-margin-right">
            <span uk-search-icon="true"></span>
              {inputValue && <span
               className="uk-search-icon uk-search-icon-flip"
                uk-spinner="ratio: 0.6"></span>}  
              <input className="uk-search-input" type="search" placeholder="Search..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}/>
            </form> 
            <select className="uk-select uk-width-small uk-margin-auto-left"
            onChange={(e)=> getSortPosts(e.target.value)}>
              <option value="asc">ASC</option>
              <option value="desc">DESC</option>
            </select>
            <select className="uk-select uk-width-small uk-margin-left"
            onChange={(e)=> getLimitPage(e.target.value)}>
              <option value="6">6</option>
              <option value="12">12</option>
              <option value="24">24</option>
            </select>
            <div className="uk-button-group uk-margin-left">
              <button className="uk-button uk-button-default">
                <span uk-icon="icon: grid"
                  // onClick={()=>window.location.href='/Posts-grid'}
                  >
                </span>
              </button>
              <button className="uk-button uk-button-default">
                  <span  uk-icon="icon: list"
                  //  onClick={()=>window.location.href='/'}
                   >
                  </span>
              </button>
          </div>
      </div> )
}