import {GridItems} from "./GridItems";
import { usePosts } from "../../PostsContext";

export function GridContainer() {
   const { currentPosts } = usePosts();

   return(
   <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
       {currentPosts?.map((post) => {
        return <GridItems key={post.id} {...post} />;
      })} 
   </div>
   )
}