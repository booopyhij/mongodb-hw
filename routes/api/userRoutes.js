// routes for users
const router = require('express').Router();
const {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser,
  addFriend,
  removeFriend,
} = require('../../controllers/user-controller');
// /api/users all users
router.route('/')
.get(getAllUsers)
.post(createNewUser);
// /api/users/:userId get one specific user
router.route('/:userId')
.get(getOneUser)
.put(updateOneUser)
.delete(deleteOneUser);
// /api/users/:userId/friends/:friendId get one friend associated with one user
router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(removeFriend);
module.exports = router;