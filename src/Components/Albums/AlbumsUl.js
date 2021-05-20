import { AlbumsItem } from "./AlbumsItem";
import { usePosts } from "../../PostsContext";

export function AlbumsUl() {
   const { currentPosts } = usePosts();

   return(
      <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
            {currentPosts?.map((post) => {
        return <AlbumsItem key={post.id} {...post} />;
      })}
      </div>
   )
}