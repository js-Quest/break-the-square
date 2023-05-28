const { Schema, model } = require('mongoose');

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
        return this._createdAt.toLocaleString();
      }
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Reaction'
      },
    ],
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

// thoughtSchema.virtual('reactionCount', {
//   ref: 'Reaction',
//   localField: '_id',
//   foreignField: 'thought',
//   count: true,
// });




// Schema Settings:

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

const Thought = model('thought', thoughtSchema);
module.exports = Thought;