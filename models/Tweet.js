const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TweentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  test: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Tweet = mongoose.model("tweet", TweentSchema);

module.exports = Tweet;