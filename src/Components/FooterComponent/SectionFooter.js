import PropTypes from "prop-types";
import { useState, useEffect } from 'react';
import { usePosts } from "../../PostsContext";

function SectionFooter() {
  const { 
  totalPages, 
  currentPage, 
  getLimitPosts, 
  getPaginatePage, 
  spinerValue, 
  currentPosts 
} = usePosts();
  
  const [spinValue, setSpinValue] = useState(false);
  useEffect(() => setSpinValue(spinerValue),[currentPosts]);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
   return (
    <>
    <div className="uk-margin">
    <button className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom"
     onClick={()=> {
      setSpinValue(true);
       getLimitPosts();
       }}>
      Load more{" "}
     {spinValue && <div className="uk-margin-small-left"
      uk-spinner="ratio: 0.6"></div>}
    </button>
    </div>
      <ul className="uk-pagination uk-flex-center uk-flex-middle" uk-margin="true">
      <li>
        {(currentPage<=1) || <a href="#">
          <span uk-pagination-previous="true"
           onClick={() =>getPaginatePage(Number(currentPage)-1)}
          ></span>
        </a>}
      </li>
        {pageNumbers.map((numPage) => (
      <li key={ numPage } 
        className={(numPage === currentPage) ? "uk-active" : ""} 
        onClick={() => getPaginatePage(numPage)}>
        {(numPage === currentPage) ? 
        <span className="uk-text-danger">{ numPage }</span> :
        <a href="#">{ numPage }</a>}
      </li>))}
      <li>
        {(currentPage>=totalPages) || <a href="#">
          <span uk-pagination-next="true"
          onClick={() => getPaginatePage(Number(currentPage)+1)}
          ></span>
        </a>}
      </li>
    </ul>
    </>
   ) 
}

SectionFooter.propTypes = {
  currentPosts: PropTypes.array,
  spinerValue: PropTypes.bool,
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  getLimitPosts: PropTypes.func,
  getPaginatePage: PropTypes.func
}

export default SectionFooter;