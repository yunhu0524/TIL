const jwt = require('jsonwebtoken');

const secret = 'vLEuVV3QgsjrufqRdpJJWosKW2tmbH5Q'
const token = jwt.sign(
  {
    id: 'userId',
    isAdmin: true,
  },
  secret,
  {expiresIn: 2}
);
console.log(token)