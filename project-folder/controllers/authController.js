const jwt = require("jsonwebtoken");

exports.generateToken = (req, res) => {
    const payload = { id: 1, name: "User" }; // Example payload
    const token = jwt.sign(payload, "secret_key", { expiresIn: "1h" });
    res.status(200).json({ token });
};

exports.handlePostRequest = (req, res) => {
    res.status(200).send("I am post body");
};