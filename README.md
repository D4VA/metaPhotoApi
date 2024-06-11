# MetaPhotoApp API

Este es un proyecto de API que consume un API extenar y ordena el llamado de 3 endpoints desarrollada en Node.js utilizando Express. Proporciona endpoints para buscar y acceder a datos combinados de fotos, usuarios y álbumes.

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

### Dependencias de Producción

- **express**: Framework web para Node.js.
- **cors**: Middleware de Express para habilitar el control de acceso CORS (Cross-Origin Resource Sharing).
- **axios**: Cliente HTTP basado en promesas para el navegador y Node.js.

### Dependencias de Desarrollo

- **@babel/cli**: Herramienta de línea de comandos para Babel.
- **@babel/core**: Núcleo de Babel para compilar el código ECMAScript 2015+ en una versión anterior de JavaScript.
- **@babel/preset-env**: Conjunto de plugins de Babel que permite utilizar las últimas características de JavaScript.
- **@eslint/js**: Paquete compartido para las reglas de ESLint.
- **eslint**: Herramienta de análisis de código estático para identificar patrones problemáticos en el código JavaScript.
- **globals**: Conjunto de variables globales comunes para diferentes entornos de ejecución.

## Licencia

Este proyecto está bajo la Licencia [MIT](LICENSE).
