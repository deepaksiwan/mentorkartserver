const jwt = require('jsonwebtoken');

// @desc create a login
// @route POST /login
exports.login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username !== process.env.ADMIN_USER_ID) {
    res.send({ msg: 'Wrong Credentials !!' });
  } else {
    if (password !== process.env.ADMIN_PASS) {
      res.send({ logIn: false, msg: 'Wrong Credentials !!' });
    } else {
      const userID = process.env.ADMIN_USER_ID;
      const token = jwt.sign(userID, process.env.JWT_SECRET);
      res.send({ logIn: true, msg: 'Hello Admin', token: token });
    }
  }
};
