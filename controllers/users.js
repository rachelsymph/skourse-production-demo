const User = require('../model/User');

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, data: users });
  } catch (err) {
    res.status(500).json({ success: false, msg: 'Fail to fetch all users' });
  }
};

const getUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, msg: 'Did not find a user of that id' });
  }
};

const createUser = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' });
  }

  const newUser = new User({
    name,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json({ success: true, savedUser });
  } catch {
    res.status(400).json({ success: false, msg: 'Fail to add to new user' });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const updatedUser = await User.updateOne({ _id: id }, { $set: { name } });
    res.status(201).json({ success: true, updatedUser });
  } catch (err) {
    res.status(400).json({ success: false, msg: 'Fail to update user' });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.deleteOne({ _id: id });
    res.status(200).json({ success: true, data: deletedUser });
  } catch (err) {
    res.status(400).json({ success: false, msg: 'Fail to delete user' });
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
