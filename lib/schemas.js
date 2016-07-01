var mongoose = require('mongoose');
module.exports = function () {
  var threadschema = new mongoose.Schema({
    title: String,
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
  });

  var postschema = new mongoose.Schema({
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
  });

  var threads = mongoose.model('threads', threadschema);
  var posts = mongoose.model('posts', postschema);

  return {
    threads: threads,
    posts: posts,
  };

};
