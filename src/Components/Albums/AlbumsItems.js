import { usePosts } from "../../PostsContext";

export function AlbumsItems({ title, id, favorite }) {
  const { handleFavoritePost } = usePosts();

   return(
   <div uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500">
      <div className="uk-card uk-card-default uk-margin-medium-bottom uk-light">
        <img src="https://picsum.photos/600/400" alt="" uk-cover="true"/>
        <canvas width="600" height="400"></canvas>
        <div className="uk-overlay-primary uk-position-cover"></div>
        <div className="uk-overlay uk-overlay-primary uk-position-bottom">
          <p>{ title }</p>
        </div>
        <div className="uk-position-top-right uk-overlay">
        <a href="#" id={id} uk-icon="icon: heart; ratio: 2"
        className={favorite === true ? "uk-icon uk-text-danger" : "uk-icon"}
         onClick={(e)=> {
          e.preventDefault();
          handleFavoritePost(id)
          }}
          ></a>
        </div>
      </div>
   </div>   
   )
}