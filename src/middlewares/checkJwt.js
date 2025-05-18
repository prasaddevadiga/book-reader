const jwt = require("jsonwebtoken");

const checkJwt = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).send("Missing token");

  jwt.verify(token, process.env.AUTH0_PUBLIC_KEY, (err, decoded) => {
    if (err) return res.status(403).send("Invalid token");
    req.user = decoded;
    next();
  });
};

module.exports = checkJwt;
