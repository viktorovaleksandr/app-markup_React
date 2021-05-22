import { AlbumsItems } from "./AlbumsItems";
import { usePosts } from "../../PostsContext";

export function AlbumsContainer() {
   const { currentPosts } = usePosts();

   return(
      <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
      {currentPosts?.map((post) => {
        return <AlbumsItems key={post.id} {...post} />;
      })}
      </div>
   )
}