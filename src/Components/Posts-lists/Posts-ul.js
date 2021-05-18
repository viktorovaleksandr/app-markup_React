import { PostsItem } from "./Post-Item";
import { usePosts } from "../../PostsContext";

export function PostsUl() {
  const { currentPosts } = usePosts();
  
   return(
      <div className="uk-grid  uk-child-width-1-2@m">
       {currentPosts?.map((post) => {
        return <PostsItem key={post.id} {...post} />;
        })}
      </div>
   )
}