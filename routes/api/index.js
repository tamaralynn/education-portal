const router = require("express").Router();
const noteRoutes = require("./note");
// const userRoutes = require("./user");
// const lessonRoutes = require("./lesson");

// Notes routes
router.use("/note", noteRoutes);
// User routes
// router.use("/user", userRoutes);
// // Lessons routes
// router.use("/lesson", lessonRoutes);

module.exports = router;