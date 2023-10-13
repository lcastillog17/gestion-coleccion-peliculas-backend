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
```

## Uso de la API

A continuación, se muestran capturas de pantalla que ilustran el uso de los endpoints en Postman y una captura de pantalla de la colección de datos en el gestor de base de datos MongoDB.

### 1. Crear una Nueva Película

![image](https://github.com/lcastillog17/gestion-coleccion-peliculas-backend/assets/79107524/8d764be0-defa-4568-9073-7f9a9c4bd769)

Esta captura de pantalla muestra cómo crear una nueva película enviando una solicitud POST a la ruta `/movies` utilizando Postman.

### 2. Obtener Todas las Películas

![image](https://github.com/lcastillog17/gestion-coleccion-peliculas-backend/assets/79107524/39a6481e-0c43-4188-9a80-06ce5588846b)

Aquí puedes ver una solicitud GET en Postman para obtener una lista de todas las películas disponibles en la base de datos.

### 3. Obtener los Detalles de una Película

![image](https://github.com/lcastillog17/gestion-coleccion-peliculas-backend/assets/79107524/d2698448-2040-4265-b5f0-7c9f688dda40)

Esta captura de pantalla muestra cómo obtener los detalles de una película específica enviando una solicitud GET a la ruta `/movies/:id` en Postman.

### 4. Actualizar una Película

![image](https://github.com/lcastillog17/gestion-coleccion-peliculas-backend/assets/79107524/190dd895-f170-4567-b613-513d32c2ef45)

Aquí se ilustra cómo actualizar los detalles de una película existente mediante una solicitud PUT en Postman.

### 5. Eliminar una Película

![image](https://github.com/lcastillog17/gestion-coleccion-peliculas-backend/assets/79107524/ea076436-39ff-42b3-b981-ab4f96e2eb6f)

Esta captura de pantalla muestra el proceso de eliminación de una película enviando una solicitud DELETE en Postman.

### 6. Colección de Datos en MongoDB

![image](https://github.com/lcastillog17/gestion-coleccion-peliculas-backend/assets/79107524/9486d2ba-280d-483c-a94c-fc53986eca2e)

Aquí puedes ver una captura de pantalla de la colección de datos de películas en tu gestor de base de datos MongoDB.

## Cómo Ver las Capturas de Pantalla

Para ver las capturas de pantalla en tamaño completo, simplemente haz clic en las imágenes. Esto te llevará a la versión en alta resolución de cada captura.

Estas capturas de pantalla muestran el uso práctico de la API de películas y cómo se refleja en la base de datos de MongoDB.

