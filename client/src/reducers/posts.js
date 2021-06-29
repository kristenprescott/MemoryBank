export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload; // <<--- action.payload = posts
    case "CREATE":
      return [...posts, action.payload];
    default:
      return posts;
  }
};
