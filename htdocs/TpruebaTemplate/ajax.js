// Formato Ricardo
var url = "http://www.mocky.io/v2/5a3a93af31000071148e9627";
var request = new XMLHttpRequest();

request.open("GET", url);
request.onload = function () {
    if (request.status == 200) {
        document.getElementById("random").innerHTML = this.response;
        console.log('url si cargada');
    } else {console.log('url no cargada');}};
request.send(null)


// Formato Alex
// function Ajax(method, url, onSuccess) {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             onSuccess(JSON.parse(this.responseText));
//         }
//     };

//     xhttp.open(method, url, true);
//     xhttp.send();
// }