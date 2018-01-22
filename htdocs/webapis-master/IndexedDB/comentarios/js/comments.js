$(function () {
    // Comprobación de soporte indiceedDB
    if (!(Modernizr.indexeddb)) {
        $('#soporte').html("Soporte navegador: NO").css('font-weight', 'bold');
    } else {
        $('#soporte').html("Soporte navegador: SI").css('font-weight', 'bold');
    }

    // Primero borramos cualquier instancia anterior
    // (Solo a efectos de la demo)
    /*  var petición = window.indexedDB.deleteDatabase("BDComentarios");
      petición.onsuccess = function (event) {
          return;
      }*/

    // Abrir la base de datos
    var refBD = window.indexedDB.open("BDComentarios", 1);

    // Rellenar la base con algunos comentarios cuando se haya abierto la BD
    // onupgradeneeded es la primera accion una vez se carga la BD
    // el evento e es el que trae la info desde la BD
    refBD.onupgradeneeded = function (e) {
        var db = e.target.result;
        var tabla = db.createObjectStore("Comentarios_Articulo1", { autoIncrement: true });
        tabla.createIndex("indexnombre", "nombre", { unique: false });
        console.log("nomre");
        // tabla.createIndex("index_fecha", "fecha", { unique: false });
        // console.log("fecha");
        tabla.add({ nombre: "Obdulio", fecha: new Date(2013, 7, 1).toLocaleDateString(), comentario: "¡Qué profundo!" });
        tabla.add({ nombre: "Palmacio", fecha: new Date(2013, 7, 1).toLocaleDateString(), comentario: "¿Profundo? Lee a los auténticos: Piero Grullo, Kross Pedal..." });
        tabla.add({ nombre: "Filapiano", fecha: new Date(2013, 7, 2).toLocaleDateString(), comentario: "Pues a mí no me va el latín." });
        tabla.add({ nombre: "Monglorio", fecha: new Date(2013, 7, 3).toLocaleDateString(), comentario: "A mí sí; lo practico en la intimidad..." });

    }
    // Consultar la BB.DD. e inicializar la IU
    // Siguiente accion despues del onupgradeneeded
    refBD.onsuccess = function (e) {
        var db = e.target.result;
        mostrarComentarios(db);
    };
});

// LISTADO COMPLETO
function mostrarComentarios(db) {
    // Vaciamos los posibles contenidos previos.
    var tbody = $("#Comentarios_A1 tbody");
    tbody.empty();

    var transaccion = db.transaction(["Comentarios_Articulo1"]);
    var tabla = transaccion.objectStore("Comentarios_Articulo1");

    var indice = tabla.index("indexnombre");
    // IDBKeyRange sirve para la busqueda de info en la BD
    //IDBKeyRange.upperBound('Z', true) coje todos los datos desde la a la z incluyendo la 'Z'(true)
    //si solo queremos uno exactamente IDBKeyRange.only("Filapiano");
    var rango = IDBKeyRange.upperBound('Z', true);

    indice.openCursor(rango).onsuccess = function (e) {
        //tabla.openCursor().onsuccess = function (e) {
        var fila = e.target.result;

        if (fila) {
            tbody.append("<tr><td>" + fila.value.nombre +
                "</td><td>" + fila.value.fecha +
                "</td><td>" + fila.value.comentario +
                "</td></tr>");
            // El cursor sigue el recorrido hasta que 
            // continue() devuelve false.
            fila.continue();
        }
    };
}

// Insertar y mostrar cambios. (no actualiza)
function insertarComentario() {
    var refBD = window.indexedDB.open("BDComentarios", 1);

    refBD.onsuccess = function (e) {
        var db = e.target.result;
        var transaccion = db.transaction(["Comentarios_Articulo1"], "readwrite");
        var tabla = transaccion.objectStore("Comentarios_Articulo1");
        var nombre = $("#txtNombre").val();
        var fecha = new Date($("#txtFecha").val())
        var comentario = $("#txtComentario").val();


        tabla.add({
            nombre: nombre,
            fecha: new Date(fecha).toLocaleDateString(),
            comentario: comentario
        }).onsuccess = function (e) {
            mostrarComentarios(db);
        };
    }
    refBD.onerror = function (e) {
        alert("Error al insertar");
    }
}