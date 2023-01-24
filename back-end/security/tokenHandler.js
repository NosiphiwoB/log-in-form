var jwt = require("jsonwebtoken");

const createToken = (user) => {
  var token = jwt.sign(
    { name: user.name, roles: user.roles },
    "ddjfkdfjldsjkbbf"
  );
  return token;
};

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    try {
      // cut using slice or
      var decoded = jwt.verify(token.split(" ")[1], "ddjfkdfjldsjkbbf");
      console.log("tokentokentoken", decoded);
      next();
    } catch (e) {
      return res.send(401);
    }
  }
};

module.exports = { createToken, verifyToken };