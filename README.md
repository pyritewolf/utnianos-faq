# Utnianos FAQ

Un proyecto comunitario para resolver dudas comunes de la UTN FRBA.

## Setup local

1. Cloná el proyecto
2. Descargate [Docker](https://docs.docker.com/get-docker/) y [docker-compose](https://docs.docker.com/compose/install/)
3. Corré `docker-compose run --rm ui npm install`
  - Es recomendable que vuelvas a correr esto cada vez que crees una nueva branch, por si alguien agregó dependencias
4. Corré `docker-compose up`
5. Andá a http://localhost:3001 ✨

## Contribuir

Si querés contribuir algo:

1. Hacé el setup local del proyecto
2. Creá una nueva branch (`git checkout -b tu-nuevo-feature`)
3. Desarrollá tus cambios y pushealos
4. Abrí un PR contra `main`
   - Si estás incluyendo información nueva para la FAQ, detallá tus fuentes en el PR
