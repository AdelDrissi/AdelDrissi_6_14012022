// Import package //
const jwt = require('jsonwebtoken');

// Import dotenv //
const dotenv = require('dotenv');
dotenv.config();

// Exports middleware //
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.KEY_ACCESS);
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    res.status(401).json({ message: 'erreur' });
  }
};
