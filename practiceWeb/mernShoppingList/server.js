const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const config = require("config");

const itemsRoute = require("./routes/api/items");
const usersRoute = require("./routes/api/users");
const authRoute = require("./routes/api/auth");

const app = express();

app.use(express.json());

// DB Config
const db = config.get("mongoURI");

// Connect to Mongo
mongoose
  .connect(db || process.env.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected... "))
  .catch((err) => console.log("Error: " + err));

// Use Routes
app.use("/api/items", itemsRoute);
app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
