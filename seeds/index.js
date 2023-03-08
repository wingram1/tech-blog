const seedUsers = require("./user-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n===== DB SYNC SUCCESS! =====\n");

  await seedUsers();
  console.log("\n===== USERS SEEDED =====");
};

seedAll();
