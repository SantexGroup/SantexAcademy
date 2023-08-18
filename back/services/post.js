const { PostProvider } = require('../providers');

const createPostServ = async (post) => {
  const newPost = await PostProvider.newPostProv(post);
  return newPost;
};

module.exports = {
  createPostServ,
};
