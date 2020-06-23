const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  profilepic: String
  //,
  //activityfeed: [{ type: Schema.Types.ObjectId, ref: 'Activity' }],
  //owner: { type: Schema.Types.ObjectId, ref: 'User' }
});

const User = mongoose.model('User', userSchema);

module.exports = User;