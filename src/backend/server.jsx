const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000; // You can change the port as needed

// MongoDB connection setup
mongoose.connect("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a simple user schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to handle login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user in the database
    const user = await User.findOne({ email, password });

    if (user) {
      res.json({ success: true, message: "Login successful!" });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
