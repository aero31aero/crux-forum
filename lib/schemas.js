var mongoose = require('mongoose');

module.exports = function () {

  var threads = mongoose.model('threads', new mongoose.Schema({
    title: String,
    link: String,
    active: Boolean,
    created_at: Date,
    updated_at: {
      type: Date,
      default: Date.now,
    },
    activity: {
      type: Array,
      default: [],
    }
  }));

  var posts = mongoose.model('posts', new mongoose.Schema({
    user: Object,
    thread: ObjectID,
    text: String,
    created_at: Date,
    updated_at: {
      type: Date,
      default: Date.now,
    },
    refers_to: {
      type: Array,
      default: [],
    }
  }));

  return {
    threads: threads,
    posts: posts,
  };

}();
