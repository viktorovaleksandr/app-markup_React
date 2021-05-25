import fetcher from "../utils/fetcher"

const getPosts = async () => {
  return await fetcher("/posts?_limit=100");
}

const getTotalPosts = async () => {
   return await fetcher("/posts?_limit=0").then(({meta})=> meta.total);
}

// ===============
const patchFavoritePostsRequest = async (id, favorite) => {
  return await fetcher(`/posts/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      favorite,
    }),
  });
};

export { getPosts, getTotalPosts, patchFavoritePostsRequest  };