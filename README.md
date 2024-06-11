# MetaPhotoApp API

Este es un proyecto de API desarrollado en Node.js utilizando Express. Proporciona endpoints para buscar y acceder a datos combinados de fotos, usuarios y álbumes.

## Instalación

1. Clona este repositorio en tu máquina local.

    ```
    git clone https://github.com/D4VA/metaPhotoApi.git
    ```

2. Accede al directorio del proyecto.

    ```
    cd metaPhotoApi
    ```

3. Instala las dependencias utilizando npm.

    ```
    npm install
    ```
## Uso

Para iniciar el servidor de la API, utiliza el siguiente comando:

    ```
    npm start
    ```

Esto iniciará el servidor Express y la API estará disponible en [http://localhost:3000](http://localhost:3000).

## Endpoints

### `GET /api/photos`

Devuelve una lista de fotos combinadas con datos de álbumes y usuarios. Puedes filtrar los resultados por título de foto, título de álbum y correo electrónico del usuario. Los parámetros opcionales son `title`, `album.title`, `album.user.email`, `limit` y `offset`.

### `GET /api/photos/:id`

Devuelve una foto específica combinada con datos de álbumes y usuarios según su ID.

## Estructura del Proyecto

El proyecto sigue una estructura estándar de Express:

- `app.js`: Archivo principal que configura y arranca el servidor Express.
- `routes/`: Carpeta que contiene los archivos de rutas de la API.
- `controllers/`: Carpeta que contiene los controladores de la API para manejar las solicitudes.
- `services/`: Carpeta que contiene los servicios para interactuar con los datos.

## Dependencias

- express: Framework web para Node.js.

## Dependencias de Desarrollo


## Licencia

Este proyecto está bajo la Licencia [MIT](LICENSE).
