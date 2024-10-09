const express = require("express");
const { Pool } = require("pg");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "postgres",
  user: "postgres",
  password: "192837465",
});

// Error logging function
const logError = (message, error) => {
  console.error(message, error);
};

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user; // Save user data in req.user
    next();
  });
};

// Routes
app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      `INSERT INTO users (email, password, created_at) VALUES ($1, $2, $3) RETURNING *`,
      [email, hashedPassword, new Date()]
    );

    res
      .status(201)
      .json({ message: "User registered successfully!", user: result.rows[0] });
  } catch (error) {
    logError("Error during registration:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
});

app.post("/feedback", async (req, res) => {
  const { name, email, website, message } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO feedback (name, email, website, message, created_at) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [name, email, website, message, new Date()]
    );

    res
      .status(201)
      .json({
        message: "User registered successfully!",
        feedback: result.rows[0],
      });
  } catch (error) {
    logError("Error during registration:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE email = $1 LIMIT 1",
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({ error: "User not found" });
    }

    const user = result.rows[0];
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email, created_at: user.created_at },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ token });
  } catch (error) {
    logError("Error during login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/auth", (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ message: "Authenticated successfully", user: decoded });
  } catch (error) {
    logError("Error during token verification:", error);
    res.status(401).json({ error: "Invalid token" });
  }
});

app.get("/profile", authenticateToken, (req, res) => {
  res.json({ message: "Profile data", user: req.user });
});

app.get("/users", authenticateToken, async (req, res) => {
  try {
    const result = await pool.query("SELECT id, email, created_at FROM users");
    res.json(result.rows);
  } catch (error) {
    logError("Error fetching users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
