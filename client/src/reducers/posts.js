export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload; // <<--- posts
    case "CREATE":
      return posts;
    default:
      return posts;
  }
};
