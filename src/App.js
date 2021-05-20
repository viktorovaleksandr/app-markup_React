import "uikit/dist/css/uikit.css";
import Uikit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
Uikit.use(Icons);

import { BrowserRouter, Route } from "react-router-dom";
import { PostsProvider } from "./PostsContext";
import { PostsLists } from "./Components/PostsLists/PostsLists";
import { PostsGrid } from "./Components/PostsGrid/PostsGrid";
import { Albums } from "./Components/Albums/Albums";
import { Posts } from "./Components/Posts/Posts";
import { Post } from "./Components/Post/Post";

export default function App() {
  return (
    <PostsProvider>
      <BrowserRouter>
        <Route exact path="/" component={PostsLists} />
        <Route exact path="/Posts-grid" component={PostsGrid} />
        <Route exact path="/Albums" component={Albums} />
        <Route exact path="/Posts" component={Posts} />
        <Route exact path="/Post" component={Post} />
      </BrowserRouter>
    </PostsProvider>
  );
}
