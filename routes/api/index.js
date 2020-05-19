const router = require("express").Router();
const noteRoutes = require("./note");
const userRoutes = require("./user");
const lessonRoutes = require("./lessons");

// Notes routes
router.use("/notes", noteRoutes);
// User routes
router.use("/users", userRoutes);
// Lessons routes
router.use("/lessons", lessonRoutes);

module.exports = router;