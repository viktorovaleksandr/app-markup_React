import { useState, createContext, useEffect, useContext } from 'react';
import { getPosts, getTotalPosts } from "./api/index";
import fetcher from "./utils/fetcher";
const PostsContext = createContext(null);

 const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsLimitPage, setPostsLimitPage] = useState(6);

  const lastPost = currentPage * postsLimitPage;
  const firstPost = lastPost - postsLimitPage;
  const totalPages =  Math.ceil(totalPosts / postsLimitPage);
  const currentPosts = posts.slice(firstPost, lastPost);

  // ================================================
  const [favorites, setFavorite] = useState([]);

  const getIdFavoritePost = (id) => {
   const newFavorites = posts.filter(function(post) { 
     return post.id == id 
    })[0];
   setFavorite(favorites => [newFavorites,...favorites]);
  };

  const deleteFavoritePost = (id) => {
    setFavorite(favorites => favorites.filter(post => post.id !== id));
  }
  // ================================================

  useEffect(() => {
    getPosts().then((posts) => setPosts(posts.data));
    getTotalPosts().then((total)=> setTotalPosts(Number(total)))
  },[]);

  const getLimitPosts = () => {
    return fetcher(`/posts?_start=0&_end=${postsLimitPage+6}`)
    .then((posts) => {
      setPostsLimitPage(postsLimitPage+6);
      setPosts(posts.data);
    });
  };

  const getLimitPage = (value) => {
    return fetcher(`/posts?_start=0&_end=${value}`)
    .then(({ data }) => {
      setPosts(data);
      setPostsLimitPage(postsLimitPage+value);
    });
  };

  const getPaginatePage = (value) => {
    if (value && value < totalPosts) {
        return fetcher(`/posts?_limit=6&_page=${value}`)
          .then(({ meta }) => {
          setCurrentPage(meta.numPage);
      });
    }
  };

  const getSearchPosts = (value)=> {
    return fetcher(`/posts?title_like=${value}`)
    .then((posts) => {
      setPosts(posts.data);
      setTotalPosts(posts.data.length);
    });
  }
 
  const getSortPosts = (value) => {
    return fetcher(`/posts?_sort=id&_order=${value}`)
    .then((posts) => setPosts(posts.data));
  }

  const value = {
    getPaginatePage,
    currentPosts,
    postsLimitPage,
    totalPages,
    currentPage,
    getSortPosts,
    getSearchPosts,
    getLimitPage,
    getLimitPosts,
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
