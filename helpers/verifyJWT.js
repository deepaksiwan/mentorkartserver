const jwt = require('jsonwebtoken');

exports.verifyJWT = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) {
    res.send('Token is Required');
  } else {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.send({ isAuth: false, msg: 'User not authorised' });
      } else {
        next();
      }
    });
  }
};
