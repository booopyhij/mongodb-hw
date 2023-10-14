const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/user-controller');
// /api/users all users
router.route('/').get(getUsers).post(createUser);
// /api/users/:userId get one specific user
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);
// /api/users/:userId/friends/:friendId get one friend associated with one user
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);
module.exports = router;