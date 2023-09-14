const User = require("./user");
const Post = require("./post");
const Comments = require("./comments");

User.hasMany(Post);
Post.belongsTo(User);

Post.hasMany(Comments);
Comments.belongsTo(Post);

User.hasMany(Comments);
Comments.belongsTo(User);

module.exports = {
  User,
  Post,
  Comments,
};
