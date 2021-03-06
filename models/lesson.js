const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
  date: { type: Date, default: Date.now },
  class: { type: String, required: true },
  plan: [{ topic: String, required: true },
        {reference: String},
        {pages: String},
        {assignment: String}]
});

const Lesson = mongoose.model("Lesson", lessonSchema);

module.exports = Lesson;