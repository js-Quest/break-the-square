const { Schema, model } = require('mongoose');
const reactionSchema =  require('./Reaction')

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: function () {
        let date = new Date();
        return date.toDateString();
      }
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});





// Schema Settings:

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;