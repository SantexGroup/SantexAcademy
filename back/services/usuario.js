const { userProvider } = require("../providers");

const createTestimonialsById = async (id, testimonial) => {
  const createdTestimonial = await userProvider.createTestimonialById(
    id,
    testimonial
  );
  return createdTestimonial;
};
const getAllTestimonials = async () => {
  const testimonials = await userProvider.getAllTestimonials();
  return testimonials;
};

const loginUser = async (email, password) => {
  try {
    const user = await userProvider.loginUser(email, password);

    if (!user) {
      return;
    }
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

const createUser = async (user) => {
  const { image, ...restOfData } = user;
  const createdUser = await userProvider.createUser({ image, ...restOfData });
  return createdUser;
};

const getUsersByCriteria = async (queryOptions, bodyOptions) => {
  const organization = await userProvider.getUsersByCriteria(
    queryOptions,
    bodyOptions
  );
  return organization;
};

const getMyUser = async (id) => {
  try {
    const userProfile = await userProvider.getMyProfile(id);
    return userProfile;
  } catch (error) {
    throw new Error(error);
  }
};

const updateMyUser = async (newDataUser, id) => {
  const userUpdate = await userProvider.updateMyUser(newDataUser, id);
  return userUpdate;
};

const deleteUserById = async (id) => {
  const deletedUser = await userProvider.deleteUser(id);
  return deletedUser;
};

const updatePhotoMyProfile = async (image, id) => {
  const photoUpdate = await userProvider.updatePhotoMyProfile(image, id);
  return photoUpdate;
};

module.exports = {
  createTestimonialsById,
  getAllTestimonials,
  loginUser,
  getMyUser,
  createUser,
  getUsersByCriteria,
  updateMyUser,
  deleteUserById,
  updatePhotoMyProfile,
};
