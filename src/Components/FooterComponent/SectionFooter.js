import { useState } from 'react';
import { usePosts } from "../../PostsContext";

export function SectionFooter() {
  const { totalPages, currentPage, getLimitPosts, getPaginatePage } = usePosts();

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

   return (
    <>
    <div className="uk-margin">
    <button className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom"
     onClick={()=> getLimitPosts()}>
      Load more{" "}
     { <div className="uk-margin-small-left"
      uk-spinner="ratio: 0.6"></div>}
    </button>
    </div>
      <ul className="uk-pagination uk-flex-center uk-flex-middle" uk-margin="true">
      <li>
        <a href="#">
          <span uk-pagination-previous="true"
           onClick={() =>getPaginatePage(currentPage-1)}
          ></span>
        </a>
      </li>
        {pageNumbers.map((numPage) => (
      <li key={ numPage } 
        className={(numPage === currentPage) ? "uk-active" : ""} 
        onClick={() => getPaginatePage(numPage)}>
        {(numPage === currentPage) ? 
        <span>{ numPage }</span> :
        <a href="#">{ numPage }</a>}
      </li>))}
      <li>
        <a href="#">
          <span uk-pagination-next="true"
          onClick={() =>getPaginatePage(currentPage+1)}
          ></span>
        </a>
      </li>
    </ul>
    </>
   ) 
}