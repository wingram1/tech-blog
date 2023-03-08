const seedUsers = require("./user-seeds");
const seedPosts = require("./post-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n===== DB SYNC SUCCESS! =====\n");

  await seedUsers();
  console.log("\n===== USERS SEEDED =====");

  await seedPosts();
  console.log("\n===== POSTS SEEDED =====");
};

seedAll();
