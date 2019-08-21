//YARGS
//Esta libreria nos ayuda a mandar comandos y parametros a travez de la consola y crear documentacion sobre su uso.

const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        descripcion: 'Descripcion de la tarea por hacer'
    }
}

const opts2 = {
    opts,
    completado: {
        demand: true,
        alias: 'c',
        descripcion: 'Marcar como completado o pendiente la tarea',
        default: true
    }
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', opts)
    .command('listar', 'Muestra todas las tareas por hacer')
    .command('actualizar', 'Actualiza una tarea por hacer', opts2)
    .command('borrar', 'Elimina una tarea por hacer', opts)
    .help()
    .argv;

module.exports = {
    argv
}