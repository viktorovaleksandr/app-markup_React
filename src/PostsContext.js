import { useState, createContext, useEffect, useContext } from 'react';
import fetcher from "./utils/fetcher";

 const PostsContext = createContext(null);

 const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsLimitPage, setPostsLimitPage] = useState(6);
  const [favorites, setfavorite] = useState([]);

  const lastPost = currentPage * postsLimitPage;
  const firstPost = lastPost - postsLimitPage;
  const totalPages = Math.ceil(posts.length / postsLimitPage);

  const currentPosts = posts.slice(firstPost, lastPost);
  const handleLimitPostsPage = (value) => setPostsLimitPage(value);
  const handleLimitPosts = () => {setPostsLimitPage(postsLimitPage+6)};
  const navigate = (value) => setCurrentPage(value);

  const getIdFavoritePost = (id) => {
   const newFavorites = posts.filter(function(post){ return post.id == id })[0];
   setfavorite(favorites => [newFavorites,...favorites]);
  };

  const deleteFavoritePost = (id) => {
    setfavorite(favorites => favorites.filter(post => post.id !== id));
  }

  useEffect(() => {
      fetcher("/posts").then((data) => setPosts(data));
  },[]);
   
  const getSearchPosts = (value)=> {
    return fetcher(`/posts?title_like=${value}`)
    .then((data) => setPosts(data));
  }
 
  const getSortPosts = (value) => {
    return fetcher(`/posts?_sort=id&_order=${value}`)
    .then((data) => setPosts(data));
  }

  const value = {
    currentPosts,
    postsLimitPage,
    totalPages,
    navigate,
    currentPage,
    getSortPosts,
    getSearchPosts,
    handleLimitPostsPage,
    handleLimitPosts,
    getIdFavoritePost,
    favorites,
    deleteFavoritePost
  }

   return (
      <PostsContext.Provider value={ value }>
        {children}
      </PostsContext.Provider>
    );

 };

const usePosts = () => useContext(PostsContext);
export { PostsContext, PostsProvider, usePosts}
