const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


// sign in existing user
app.post("/home", (req, res) => {
  email = req.body.email;
  password = req.body.password;
  auth.signInWithEmailAndPassword(email, password);
  res.send(auth);
});

// sign out singed in user
app.post("/signout", (req, res) => {
  auth.signOut();
  res.send(auth);
});

app.get("/status", (req, res) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      res.send(user);

      console.log("signed in");
      app.set("public", __dirname + "/public");
    } else {
      console.log("No user is signed in.");
    }
  });
});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/educationportal");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
