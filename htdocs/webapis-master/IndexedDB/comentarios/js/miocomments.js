// Abrir BD
var abrirBD = window.indexedDB.open("Comentarios", 1)
// var refBD = window.indexedDB.open("BDComentarios", 1);

// Primera accion:
abrirBD.onupgradeneeded = function (evento) {
    var db = evento.target.result;
    var tabla = db.createObjectStore("BDlocal",autoIncrement:true)
}

// refBD.onupgradeneeded = function (e) {
//     var db = e.target.result;
//     var tabla = db.createObjectStore("Comentarios_Articulo1", { autoIncrement: true });
//     tabla.createIndex("index_nombre", "nombre", { unique: false });
//     console.log("nomre");
//     tabla.createIndex("index_fecha", "fecha", { unique: false });
//     console.log("fecha");
//     tabla.add({ nombre: "Obdulio", fecha: new Date(2013, 7, 1).toLocaleDateString(), comentario: "¡Qué profundo!" });
//     tabla.add({ nombre: "Palmacio", fecha: new Date(2013, 7, 1).toLocaleDateString(), comentario: "¿Profundo? Lee a los auténticos: Piero Grullo, Kross Pedal..." });
//     tabla.add({ nombre: "Filapiano", fecha: new Date(2013, 7, 2).toLocaleDateString(), comentario: "Pues a mí no me va el latín." });
//     tabla.add({ nombre: "Monglorio", fecha: new Date(2013, 7, 3).toLocaleDateString(), comentario: "A mí sí; lo practico en la intimidad..." });
// }