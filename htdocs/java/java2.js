/*var pedidos[{
    nombre = "pedido1",
    precio = "22"
}, {
    nombre = "pedido2",
    precio = "33"
}];

var divpedidos = document.getElementById("divpedidos");

for (let i = 0; i < pedidos.length; i++) {
    var pedidoHTML = "";
    pedidoHTML = "<h1>" + pedidos[i].nombre + "</h1>";
    pedidoHTML = "<p>" + pedidos[i].precio + "</p>";
    divpedidos.innerHTML += pedidoHTML;
}

var algofalso = false;

// if
if ((5 + 4) > 8) { }
else if ((5 + 4) == 8) { }
else if (!false) { }
else { }

// for, muy util para arrays
for (let i = 0, j = array.length; i < 100; i++) { }

var precio = 100;
// while, se rompa el bucle cuando no sabes cuando vas a acabar, solo ejecuta si cumple
while (precio > 200) {
    precio -= 10;
}

// do while, ejecuta el primer bucle aunque no cumpla la condicion
do {
    precio -= 10;
} while (precio > 200);*/

/*var alumnos = [null];
for (let i = 0; i < 100; i++) {
    alumnos[i] = "Alumno tonto número " + i;
    console.log(alumnos[i]);}

alumnos.push("soy el 100")

console.log(alumnos[99]);

for (let i = 100; i < 104; i++) {
    alumnos.push("resto de tontos" +i);
    console.log(alumnos[i]);} */

    var alumnos = [];
    var i=0;
    do {
        alumnos[i] = "Alumno tonto número " + i;
        console.log(alumnos[i]);
        i++;
    }
    while (
        i < 100 
    )
    ;

    /*var alumnos = [null];
    var i=0;
    while (i<100) { 
        alumnos[i] = "Alumno tonto número " + i;
        console.log(alumnos[i]);
        i++;
    }*/
