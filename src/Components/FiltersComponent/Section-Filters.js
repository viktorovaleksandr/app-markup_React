import { useState, useEffect } from 'react';
import { usePosts } from "../../PostsContext";

export function SectionFilters() {
  const { getSortPosts, getSearchPosts, handleLimitPostsPage } = usePosts();
  const [inputValue, setInputValue] = useState('');
  
  useEffect(() => {
    getSearchPosts(inputValue) ;
 },[inputValue]);

   return (
      <div className="uk-margin-medium-bottom uk-flex">
            <form className="uk-search uk-search-default uk-width-medium uk-margin-remove uk-margin-right">
              <span uk-search-icon="true"></span>
              <span
                className="uk-search-icon uk-search-icon-flip"
                uk-spinner="ratio: 0.6"
              ></span>
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
            onChange={(e)=> handleLimitPostsPage(e.target.value)}>
              <option value="6">6</option>
              <option value="12">12</option>
              <option value="24">24</option>
            </select>
            <div className="uk-button-group uk-margin-left">
              <button className="uk-button uk-button-default uk-active">
                <span uk-icon="icon:  grid"></span>
              </button>
              <button className="uk-button uk-button-default">
                <span uk-icon="icon:  list"></span>
              </button>
         </div>
      </div>
   )
}