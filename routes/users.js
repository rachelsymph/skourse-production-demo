const express = require('express');
const router = express.Router();
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/users');

// router.get('/', getUsers);
// router.post('/', createUser);
// router.put('/:id', updateUser);
// router.delete('/:id', deleteUser);

router.route('/').get(getUsers).post(createUser);
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
