const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const movieRoutes = require("./routes/movieRoutes"); // Cambiar el nombre del módulo de rutas a algo relacionado con películas
require("./config/database");

const app = express();

app.use(bodyParser.json());

// Configura CORS
app.use(cors());

// Rutas
app.use("/api", movieRoutes); // Cambiar la ruta base a algo relacionado con películas

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor Express en ejecución en el puerto ${port} para películas.`);
});
