const { Schema, model, Types } = require("mongoose");
const moment = require("moment");
const reactionSchema = require('./Reaction');



//thought model
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
      get: (createdAtVal) =>
        moment(createdAtVal).format("MMM D, YYYY [at] hh:mm a"),
    },
    updatedAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) =>
        moment(createdAtVal).format("MMM D, YYYY [at] hh:mm a"),
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
//virtual property that gets amount of reactions per thought
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

//create thought model with thought schema
const Thought = model("Thought", thoughtSchema);

//export thought model
module.exports = Thought;