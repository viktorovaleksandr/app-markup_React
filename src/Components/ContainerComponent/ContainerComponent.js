import { ItemsComponent } from "../ItemsComponent/ItemsComponent";
import { usePosts } from "../../PostsContext";

export function ContainerComponent() {
  const { currentPosts } = usePosts();
  
   return(
      <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-2@m">
       {currentPosts?.map((post, index) => {
        return <ItemsComponent key={index} {...post} />;
        })}
      </div>
   )
}