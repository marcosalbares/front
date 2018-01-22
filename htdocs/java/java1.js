/*var n = 2;
var k = 4;
var z = 3.2;
var t = true;
var f = false;
var i = "asd";

console.log(n + k);
console.log(Math.pow(k, 1 / 2));
console.log(Math.sqrt(64));
console.log(29 % 5);
console.log(27 / 5);
console.log(t + i);
console.log(Math.pow(k, f));
console.log(Math.pow(k, false));
console.log(Math.pow(k, i));
console.log(i * t);
console.log(i - t);
console.log(i + t);
console.log(q);
//number
//boolean
//string
//object*/

/*var x = 2;
var y = x;
x = 10;

console.log(x + '-' + y );

var s = "hola";
var l = s;
s = "adios";

console.log(s + '-' + l );*/

/*function cerdito(){
    this.nom = "";
}
var pig1 = new cerdito();
pig1.nom = "Peggy";
var pig2 = pig1;
console.log(pig2.nom);
pig2.nom = "Juan";
console.log(pig2.nom);
//pig1 y pig2 es el mismo objeto

function can(){
    this.nom = "";
}
var can1 = new can();
can1.nom = "jan";
var can2 = new can();
console.log(can2.nom);
can2 = can1;
console.log(can1.nom+"-"+can2.nom);
//can1 y can2 son diferentes objetos con las mismas variables
*/

/*var nom = "hola";
console.log(nom);
console.log(nom[1] + "-" + nom[4]);

var arr = [];
arr[1] = 1;
arr[3] = true;
arr[4] = "hola";
arr[0] = 0;
console.log(arr);
console.log(typeof (arr));
console.log(typeof (arr[0]));
console.log(typeof (arr[1]));
console.log(typeof (arr[2]));
console.log(typeof (arr[3]));
console.log(typeof (arr[4]));
console.log(arr.length);
console.log(arr[8]);
arr[2] = 69;
console.log(arr);
console.log(arr.length);

var l = 0;
for (var i = 0; i < arr.length; i++) {
    l = l + 1;
}
console.log("L " + l);
console.log("I " + i);
*/
/*var x = 6;
var l = 1;

function factorial(x) {
    for (let i = 1; i <= x; i = i + 1) {
        l = l * i;
    }
    console.log("con for Sol: "+l);
}
factorial(x);


function fact(x) {
    if (x === 0) { return 1 }
    else { return x * fact(x - 1) }
}
console.log("con if Sol: "+fact(x));


function fac(x){
    return x > 0 ? x * fac (--x) : 1;}
console.log("con if simplificado Sol: "+fac(x));*/

var precio = 0;
var pagado = 0.88;

var monybill = [500, 200, 100, 50, 20, 10, 5, 2, 1, .5, .2, .1, .05, .02, .01];
var monybill100 = new Array;
var monybill100 = monybill*100;
var cambioo = new Array;
var cambiooo = new Array;
var resto = pagado - precio;

console.log("precio " + precio);
console.log("pagado " + pagado);
console.log("resto " + resto);
console.log("billetes " + monybill);
console.log("cambio " + cambioo);
console.log("billetes100 " + monybill100);

function cambiotext(precio, pagado) {
    if (precio > pagado) {
        console.log("paga más");
    }
    else {
        console.log("premio");
    }
}

function cambioalex(resto) {
    for (let index = 0; index < monybill.length; index++) {
        cambioo[index] = (Math.floor(resto / monybill[index]));
        resto = resto - cambioo[index]*monybill[index];
        cambiooo.push((resto));
    }
}

/*function cambiomio(resto) {
    do {
    
    } while (condition);
}*/

cambiotext(precio, pagado);
cambioalex(resto);
// cambiomio(resto)

console.log("resto " + resto);
console.log("cambio alex " + cambioo);
console.log("cambio mio " + cambiooo);

