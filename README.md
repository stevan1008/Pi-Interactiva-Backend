# Pi-Interactiva trabajo Backend o ServerSide

## Indicaciones

_La base de datos que se usó fue MongoDB en su versión de Cloud llamada "Atlas" y en apoyo del ODM de Mongoose._
_Es obligatorio crear un cluster en Mongo Atlas para correr la aplicación. Después de haber creado en Cluster es necesario que se haga la conexión a la aplicación dentro de las variables de entorno._

```

Dentro de las variables de entorno o .env se necesita adjuntar lo siguiente: MONGO_URI y JWT_SECRET. Esto por buenas prácticas en los despliegues y profesionalismo.

En MONGO_URI se tiene que poner el link de conexión que nos da Mongo Atlas desde su sitio al ya tener el Cluster.

En JWT_SECRET basta solo con poner una palabra secreta cualquiera. Ej: JWT_SECRET=111222333.admin
```

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo._

```
Importante: Se debe cumplir con lo descrito anteriormente para que la aplicación corra satisfactoriamente sin problemas. Las rutas para probar la aplicación están dentro de app.js, allí están las rutas base y después en routes encuentras dónde se alojaron las subrutas para que el testeo sea correcto.
```

### Pre-requisitos 📋
_Qué se necesita para correr la aplicación correctamente_

```
JavaScript
MongoDB en su versión Cloud, Atlas.
NodeJS
Postman (Para hacer los testeos)
```

### Instalación 🔧
_Aqui una serie de pasos para completar una satistactoria instalacion_

#Backend

```
1) npm install
2) Esperar a que las dependencias se instalen
3) npm start (Servidor corriendo)
```

## Autores ✒️

* **Marlon Muete** - *Trabajo total*