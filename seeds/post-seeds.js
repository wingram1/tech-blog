const { Post } = require("../models");

const postData = [
  {
    title: "post",
    body: "I am wingram",
    userId: 1,
  },
  {
    title: "bobalover22",
    body: "anybody else like boba?",
    userId: 2,
  },
  {
    title: "luffykun20",
    body: "anybody else like pirates?",
    userId: 3,
  },
  {
    title: "bob",
    body: "my name is bob",
    userId: 4,
  },
  {
    title: "test-user",
    body: "test post do not read",
    userId: 5,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
