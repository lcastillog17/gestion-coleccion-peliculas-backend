const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/movies", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB for movies");
  })
  .catch((err) => {
    console.error(err);
  });

const Movie = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  releaseYear: {
    type: Number,
  },
  genre: {
    type: String,
  },
  description: {
    type: String,
  },
  language: {
    type: String,
  },
  duration: {
    type: Number,
  },
  posterImage: {
    type: String,
  },
});

module.exports = mongoose.model("Movie", Movie);
