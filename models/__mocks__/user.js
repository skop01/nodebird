const bcrypt = require('bcrypt');

module.exports = {
  findOne: async ({ where: { email, id } }) => {
    if (email === 'skop01@naver.com' || id === 1) {
      return {
        id: 1,
        email: 'skop01@naver.com',
        password: await bcrypt.hash('dprhd012', 12),
        Followers: [],
        Followings: [],
        addFollowing() {},
      };
    }
    return null;
  },
  create: async () => {},
};
