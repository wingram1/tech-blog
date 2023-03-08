const { Comment } = require("../models");

const commentData = [
  {
    body: "Cool!",
    userId: 1,
    postId: 5,
  },
  {
    body: "Why would you post this?",
    userId: 2,
    postId: 4,
  },
  {
    body: "Who cares?",
    userId: 3,
    postId: 2,
  },
  {
    body: "LOL",
    userId: 2,
    postId: 3,
  },
  {
    body: "ikr XD",
    userId: 5,
    postId: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
