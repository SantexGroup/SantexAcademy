const crypto = require('crypto');

const { Publication } = require('../models');

const newPostProv = async (post) => {
  const {
    title,
    description,
    image,
    // eslint-disable-next-line camelcase
    start_date,
    // eslint-disable-next-line camelcase
    finish_date,
  } = post;

  // eslint-disable-next-line no-useless-catch
  try {
    // eslint-disable-next-line no-unused-vars
    const newPost = await Publication.create({
      id: crypto.randomUUID(),
      title,
      description,
      image,
      start_date,
      finish_date,
    });
    return newPost;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  newPostProv,
};
