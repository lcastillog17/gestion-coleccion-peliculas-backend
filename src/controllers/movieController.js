const Movie = require("../config/database");

// Crear una nueva película
exports.createMovie = async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    const savedMovie = await newMovie.save();
    res.status(201).json(savedMovie);
  } catch (error) {
    res.status(500).json({ error: "No se pudo crear la película. Error: " + error });
  }
};

// Obtener todas las películas
exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "No se pudieron obtener las películas. Error: " + error });
  }
};

// Obtener una película por ID
exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: "Película no encontrada." });
    }
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: "No se pudo obtener la película. Error: " + error });
  }
};

// Actualizar una película por ID
exports.updateMovie = async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }); // Cambiar la actualización por ID
    if (!updatedMovie) {
      return res.status(404).json({ error: "Película no encontrada." });
    }
    res.json(updatedMovie);
  } catch (error) {
    res.status(500).json({ error: "No se pudo actualizar la película. Error: " + error });
  }
};

// Eliminar una película por ID
exports.deleteMovie = async (req, res) => {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
    if (!deletedMovie) {
      return res.status(404).json({ error: "Película no encontrada." });
    }
    res.json(deletedMovie);
  } catch (error) {
    res.status(500).json({ error: "No se pudo eliminar la película. Error: " + error });
  }
};
