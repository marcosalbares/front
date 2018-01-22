var url = "http://www.mocky.io/v2/5a3a93af31000071148e9627";
var request = new XMLHttpRequest();
var request2 = new XMLHttpRequest();
// console.log('prerequest');
// Opcionalmente, indicar el formato de la respuesta.
// request.responseType = "application/json";
request.open("GET", url);
request.onload = function () {
    if (request.status == 200) {
        // console.log('request: ', request);
        // console.log('xaxi');
        document.getElementById("recibido").innerHTML = this.response;
    } else {
        console.log('cagada');
    }
};
request2.open("GET", url);
request2.onload = function () {
    if (request2.status == 200) {
        // console.log('request: ', request);
        // console.log('xaxi');
        document.getElementById("recib").innerHTML = this.response;
    } else {
        console.log('cagada');
    }
};
// function HacerSend(a) {
//     request.send(null)
//     alert('Soy el boton:'+a);
// };
var bot1 = document.getElementById('dale');
var bot2 = document.getElementById('dale2');
bot1.onclick = function(){
    request.send(null)
    alert('Soy el boton:');
}
bot2.onclick = function(){
    request2.send(null)
    alert('Soy el boton:');
}
// var url2 = "http://www.mocky.io/v2/5a3a93af31000071148e9627";
// var request2 = new XMLHttpRequest();

// // console.log('prerequest');
// // Opcionalmente, indicar el formato de la respuesta.
// // request.responseType = "application/json";
// request2.open("GET", url2);
// request2.onload = function () {
//     if (request2.status == 200) {
//         // console.log('request: ', request);
//         // console.log('xaxi');
//         document.getElementById("recib").innerHTML = this.response;
//     } else {
//         console.log('cagada');
//     }
// };
// function HacerSend2() {
//     request2.send(null)
//     alert('Soy el boton:2');
// };


//     alert('Soy el boton:2');
//     request.send(null);
// }

// console.log('envio send');