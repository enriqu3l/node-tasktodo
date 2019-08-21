

## Aplicacion de comandos de Node JS que guarda una lista de tareas por hacer

Esta es una aplicacion que sirve como ejemplo para el aprendizaje de nodeJS

Para iniciar el proyecto corra este comando

```
npm install
```

Para crear una tarea

```
node app crear -d "nombre de la tarea"
```

Para listar las tareas

```
node app listar
```

Para actualizar un atarea como completada

```
node app actualizar -d "nombre de la tarea" -c true
```

Para eliminar una tarea

```
node app borrar -d "nombre de la tarea"
```