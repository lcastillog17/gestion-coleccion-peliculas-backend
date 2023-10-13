# API de Películas

Esta es una API RESTful simple para administrar información sobre películas. Permite crear, leer, actualizar y eliminar registros de películas.

## Rutas

- `POST /movies`: Crea una nueva película.
- `GET /movies`: Obtiene una lista de todas las películas en la base de datos.
- `GET /movies/:id`: Obtiene una película específica por su ID.
- `PUT /movies/:id`: Actualiza los detalles de una película existente.
- `DELETE /movies/:id`: Elimina una película de la base de datos.

## Modelo de Datos

La información de cada película se almacena en la base de datos en el siguiente formato:

- `title` (String, requerido): El título de la película.
- `director` (String, requerido): El director de la película.
- `releaseYear` (Number): El año de lanzamiento de la película.
- `genre` (String): El género de la película.
- `description` (String): Una descripción de la película.
- `language` (String): El idioma en el que se realizó la película.
- `duration` (Number): La duración de la película en minutos.
- `posterImage` (String): La URL de la imagen del póster de la película.

## Uso

Asegúrate de tener Node.js y MongoDB instalados en tu sistema antes de ejecutar este servidor. Puedes configurar la conexión a la base de datos en el archivo `server.js`.

1. Clona este repositorio en tu máquina local.
2. Ejecuta `npm install` para instalar las dependencias.
3. Ejecuta `npm start` para iniciar el servidor.
4. Puedes usar herramientas como Postman o cURL para realizar solicitudes HTTP a las rutas mencionadas anteriormente.

## Ejemplo de Solicitud POST

Puedes crear una nueva película enviando una solicitud POST a `/movies` con los datos en el cuerpo de la solicitud. A continuación, se muestra un ejemplo de solicitud utilizando cURL:

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "title": "Ejemplo de Película",
  "director": "Director de Ejemplo",
  "releaseYear": 2022,
  "genre": "Drama",
  "description": "Esta es una película de ejemplo.",
  "language": "Inglés",
  "duration": 120,
  "posterImage": "https://ejemplo.com/poster.jpg"
}' http://localhost:3000/movies
