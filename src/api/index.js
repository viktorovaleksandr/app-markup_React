import fetcher from "../utils/fetcher"

const getPosts = async () => {
  return await fetcher("/posts?_limit=100");
}

const getTotalPosts = async () => {
   return await fetcher("/posts?_limit=0").then(({meta})=> meta.total);
}



export { getPosts, getTotalPosts };