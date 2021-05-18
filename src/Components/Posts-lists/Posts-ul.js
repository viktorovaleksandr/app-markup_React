import { PostsItem } from "./Post-Item";
import { usePosts } from "../../PostsContext";

export function PostsUl() {
  const { currentPosts } = usePosts();
  
   return(
      <div className="uk-grid  uk-child-width-1-2@m">
       {currentPosts?.map((post, index) => {
        return <PostsItem key={index} {...post} />;
        })}
      </div>
   )
}