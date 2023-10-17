// routes for thoughts
const router = require('express').Router();
const {
  getAllThoughts,
  getOneThought,
  createOneThought,
  updateOneThought,
  deleteOneThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thought');
// /api/thoughts  All thoughts
router.route('/')
.get(getAllThoughts)
.post(createOneThought);
// /api/thoughts/:thoughtId one thought
router.route('/:thoughtId')
.get(getOneThought)
.put(updateOneThought)
.delete(deleteOneThought);
// /api/thoughts/:thoughtId/reactions all reactions associated with a single thought
router.route('/:thoughtId/reactions')
.post(addReaction);
// /api/thoughts/:thoughtId/reactions/:reactionId one reaction to one thought
router.route('/:thoughtId/reactions/:reactionId')
.delete(removeReaction);
module.exports = router;