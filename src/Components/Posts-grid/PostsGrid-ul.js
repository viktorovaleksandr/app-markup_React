import {PostsGridItem} from "./PostsGrid-item";
import { usePosts } from "../../PostsContext";

export function PostsGridUl() {
   const { currentPosts } = usePosts();

   return(
   <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
       {currentPosts?.map((post) => {
        return <PostsGridItem key={post.id} {...post} />;
      })} 
   </div>
   )
}