import { useState, useEffect } from 'react';
import { usePosts } from "../../PostsContext";

export function PostsGridItem({ title, body, id}) {
  const { getIdFavoritePost } = usePosts();

   return(
      <div uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500">
        <div className="uk-card uk-card-default uk-margin-medium-bottom">
          <div className="uk-card-header">
            <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
              {title}
              <a href="#" id={id} className="uk-icon-link uk-text-danger" uk-icon="heart"
            //  onClick={(e) => getIdFavoritePost(e.currentTarget.id)}
            ></a>
            </h3>
          </div>
          <div className="uk-card-body">
            <p>
             { body }
            </p>
          </div>
          <div className="uk-card-footer">
            <a href="Post" className="uk-button uk-button-text">
              Read more
            </a>
          </div>
        </div>
      </div>
   )
}