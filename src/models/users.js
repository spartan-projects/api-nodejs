const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    user_name: {
      type: String,
    },
    user_last_name: {
      type: String,
    },
    user_password: {
      type: String,
      unique: true,
    },
    user_roles: {
      type: ['admin', 'user', 'guest'],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UserModel = new mongoose.Model('users', UserSchema);

module.exports = UserModel;
