const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' });
  }
  res.send(`Welcome to Earth ${name}`);
});

module.exports = router;
