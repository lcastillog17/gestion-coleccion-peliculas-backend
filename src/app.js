const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const movieRoutes = require("./routes/movieRoutes");
require("./config/database");

const app = express();

app.use(bodyParser.json());

// Configura CORS
app.use(cors());

// Rutas
app.use("/api", movieRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor Express en ejecución en el puerto ${port} para películas.`);
});
