//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let commando = argv._[0];

switch (commando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('========Por Hacer========'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('========================='.green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado); //Para saber si se logro hacer la operacion
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado); //Para saber si se logro hacer la operacion
        break;
    default:
        console.log('Commando no es reconocido');
        break;
}