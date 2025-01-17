const express = require("express");
const bodyParser = require("body-parser");
const helloRoutes = require("./routes/helloRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(bodyParser.json());

// Routes
app.use("/hello", helloRoutes);
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));