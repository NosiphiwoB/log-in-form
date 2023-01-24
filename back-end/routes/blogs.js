const { verifyToken } = require("../security/tokenHandler");

const blogRoute = (app) => {
  app.get("/blog", verifyToken, async (req, res) => {
    res.send("Hello world");
  });
};

module.exports = { blogRoute };
