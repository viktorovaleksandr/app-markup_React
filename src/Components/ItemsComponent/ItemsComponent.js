import { usePosts } from "../../PostsContext";

export function ItemsComponent({title, body, id, favorite}) {
  const { handleFavoritePost } = usePosts();

   return(
      <div uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500">
      <div className=" uk-card uk-card-default uk-margin-medium-bottom 
      uk-child-width-1-2@s uk-grid-collapse uk-margin" uk-grid="true">
        <div className="uk-card-media-left uk-cover-container">
          <img src="https://picsum.photos/600/400" alt="" uk-cover="true"/>
        </div>
        <div>
          <div className="uk-card-body">
            <h3 className="uk-card-title uk-margin-remove-bottom uk-flex
             uk-flex-middle uk-flex-between">
            { title.slice(0,20) }
            <a href="#" id={id} 
            className={
            favorite===true?
            "uk-icon-link uk-text-danger uk-width-small":
            "uk-icon-link uk-width-small"}
            uk-icon="heart"
            onClick={(e)=> {
              e.preventDefault();
              handleFavoritePost(id)
            }}
            ></a>
            </h3>
            <p>{ body.slice(0,100) }</p>
            <a href="Post" className="uk-button uk-button-text">
              Read more
            </a>
          </div>
        </div>
       </div>
    </div>
   )
}