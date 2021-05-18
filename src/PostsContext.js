import { useState, createContext, useEffect, useContext } from 'react';
import { getPosts, getTotalPosts } from "./api/index";
import fetcher from "./utils/fetcher";
 const PostsContext = createContext(null);

 const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsLimitPage, setPostsLimitPage] = useState(6);
  const [favorites, setfavorite] = useState([]);

  const lastPost = currentPage * postsLimitPage;
  const firstPost = lastPost - postsLimitPage;
  const totalPages = Math.ceil(totalPosts / postsLimitPage);

  const currentPosts = posts.slice(firstPost, lastPost);
  const handleLimitPostsPage = (value) => setPostsLimitPage(value);
  const handleLimitPosts = () => {setPostsLimitPage(postsLimitPage+6)};

  const getIdFavoritePost = (id) => {
   const newFavorites = posts.filter(function(post) { 
     return post.id == id 
    })[0];
   setfavorite(favorites => [newFavorites,...favorites]);
  };

  const deleteFavoritePost = (id) => {
    setfavorite(favorites => favorites.filter(post => post.id !== id));
  }

  useEffect(() => {
    getPosts().then((posts) => setPosts(posts.data));
    getTotalPosts().then((tolal) => setTotalPosts(Number(tolal)));
  },[]);

  const getPaginatePage = (value) => {
    return fetcher(`/posts?_limit=6&_page=${value}`)
    .then((page) => setPosts(page.data));
  };

  const getSearchPosts = (value)=> {
    return fetcher(`/posts?title_like=${value}`)
    .then((posts) => setPosts(posts));
  }
 
  const getSortPosts = (value) => {
    return fetcher(`/posts?_sort=id&_order=${value}`)
    .then((posts) => setPosts(posts));
  }

  const value = {
    currentPosts,
    postsLimitPage,
    totalPages,
    getPaginatePage,
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
