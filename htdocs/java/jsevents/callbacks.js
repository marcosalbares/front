var boton = document.getElementById('boton');
var miboton = document.getElementById('boton');

miboton.innerHTML="Hola";
miboton.onclick = function (evnt) {
	console.log('El evento:',evnt);
	alert('hola!');
	this.innerHTML="Mueve";
}

/*document.body.onclick=function (e) {
	alert('hola! buddy');
}

document.body.onkeypress=function (e) {
	console.log('tecla',e);
	if(e.keyCode==119) alert('Presionada la 119');
	else alert('Presionada otra');
}*/

var botones= document.getElementsByClassName('alertor');
console.log(botones);

for (var i = 0; i < botones.length; i++) {
	botones[i].onclick=function (e) {
		alert('Soy el boton:'+this.innerHTML);
	}
}