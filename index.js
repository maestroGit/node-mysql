var mysql = require('mysql');

// creamos obj
// Podríamos crear un módulo para exportar la conexión y usarla en cualquier parte de la aplicación
var conexion = mysql.createConnection({
    host : 'localhost',
    database : 'vehiculos',
    user : 'javier',
    password : '123',
});

// establecemos la conexión con objeto {conexion} con los datos de la base de datos MySQL
conexion.connect(function(err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + conexion.threadId);
});

// ejecutamos consultas con el método query:
conexion.query('SELECT * FROM coche ', function (error, results, fields) {
    if (error)
        throw error;

    results.forEach(result => {
        console.log(result);
    });
});


conexion.end();