const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

// Rutas CRUD
router.post("/movies", movieController.createMovie);
router.get("/movies", movieController.getAllMovies);
router.get("/movies/:id", movieController.getMovieById);
router.put("/movies/:id", movieController.updateMovie);
router.delete("/movies/:id", movieController.deleteMovie);

module.exports = router;
