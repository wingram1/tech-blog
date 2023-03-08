const { User } = require("../models");

const userData = [
  {
    username: "wingram1",
    email: "wingram@instructors.2u.com",
    password: "password123",
  },
  {
    username: "bobalover22",
    email: "iloveboba1312@gmail.com",
    password: "bobabobaboba",
  },
  {
    username: "luffykun20",
    email: "yoshmydudes@gmail.com",
    password: "gomugomuno",
  },
  {
    username: "bob",
    email: "bob@bobsworld.com",
    password: "bobobobobobobob",
  },
  {
    username: "test-user",
    email: "test@test.test",
    password: "testpassword",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
