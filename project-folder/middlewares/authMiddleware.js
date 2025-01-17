const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) return res.status(403).send("Access denied. No token provided.");

    try {
        const decoded = jwt.verify(token, "secret_key");
        req.user = decoded;
        next();
    } catch (ex) {
        res.status(401).send("Invalid token.");
    }
};

module.exports = authMiddleware;