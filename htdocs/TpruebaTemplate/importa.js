var url = "http://www.mocky.io/v2/5a3bbb9b3000001c1a82d332";
var request = new XMLHttpRequest();

// console.log('prerequest');
// Opcionalmente, indicar el formato de la respuesta.
// request.responseType = "application/json";
request.open("GET", url);
request.onload = function () {
    if (request.status == 200) {
        // console.log('request: ', request);
        // console.log('xaxi');
        document.getElementById("recibido").innerHTML = this.response;
    // }else{
    //     console.log('cagada');
    }
};
// console.log('envio send');
request.send(null);