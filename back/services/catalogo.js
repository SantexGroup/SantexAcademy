const getCatalog = async () => {
    const users = await userProvider.getCatalog();
    return users;
  };

module.exports = {getCatalog}