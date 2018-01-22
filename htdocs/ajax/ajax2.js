var url = "http://www.mocky.io/v2/5a3a93af31000071148e9627";

function obtenerDeServidor(unaUrl,unReq,nomDiv){
    var request2 = unReq;
    request2.open("GET", unaUrl);
    request2.onload = function () {
        if (request2.status == 200) {
            document.getElementById(nomDiv).innerHTML = this.response;
        } else {
            console.log('cagada');
        }
    };
    request2.send(null)
}

var bot1 = document.getElementById('dale');
var bot2 = document.getElementById('dale2');
bot1.onclick = function(){
    var request = new XMLHttpRequest();
    obtenerDeServidor(url,request,"recibido");
}

bot2.onclick = function(){
    var request2 = new XMLHttpRequest();
    obtenerDeServidor(url,request2,"recib");
}
