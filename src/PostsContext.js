import { useState, createContext, useEffect, useContext } from 'react';
import { getPosts, getTotalPosts } from "./api/index";
import fetcher from "./utils/fetcher";
const PostsContext = createContext(null);

const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsLimitPage, setPostsLimitPage] = useState(6);
  const [spinerValue, setSpinerValue] = useState();

  const lastPost = currentPage * postsLimitPage;
  const firstPost = lastPost - postsLimitPage;
  const totalPages =  Math.ceil(totalPosts / postsLimitPage);
  const currentPosts = posts.slice(firstPost, lastPost);

  useEffect(() => {
    getPosts().then((posts) => setPosts(posts.data));
    getTotalPosts().then((total)=> setTotalPosts(Number(total)))
  },[]);

  const getLimitPosts = () => {
    return fetcher(`/posts?_start=0&_end=${postsLimitPage+6}`)
    .then((posts) => {
      setPostsLimitPage(postsLimitPage+6);
      setPosts(posts.data);
      setSpinerValue(false);
    });
  };

  const getSortPosts = (value) => {
    return fetcher(`/posts?_sort=id&_order=${value}`)
    .then((posts) => setPosts(posts.data));
  }

  const getLimitPage = (value) => {
    return fetcher(`/posts?_start=0&_end=${value}`)
    .then(({ data }) => {
      setPostsLimitPage(Number(value) + postsLimitPage);
      setPosts(data);
    });
  };

  const getPaginatePage = (value) => {
    return fetcher(`/posts?_limit=6&_page=${value}`)
      .then(({ meta }) => {
      setCurrentPage(Number(meta.numPage));
    });
  };

  const getSearchPosts = (value)=> {
    return fetcher(`/posts?title_like=${value}`)
    .then(({ data }) => {
      setPosts(data);
      setTotalPosts(data.length);
      setSpinerValue(false);
    });
  }
  

  const value = {
    spinerValue,
    getPaginatePage,
    currentPosts,
    postsLimitPage,
    totalPages,
    currentPage,
    getSortPosts,
    getSearchPosts,
    getLimitPage,
    getLimitPosts,
  }

   return (
    <PostsContext.Provider value={ value }>
      {children}
    </PostsContext.Provider>
  );

};

const usePosts = () => useContext(PostsContext);
export { PostsContext, PostsProvider, usePosts}
