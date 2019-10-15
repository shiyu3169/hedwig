const express = require("express");
const path = require("path");
const connectDB = require("./config/db");

const app = express();

// Connect DB
connectDB();

// Init Middle ware
app.use(express.json({ extended: false }));

// Define Routes
// app.use("/api/auth", require("./routes/auth"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 3100;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
