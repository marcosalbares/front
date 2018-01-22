function generadorNombres(num_nombres) {
	var arrNombres = [];
	for (var i = 0; i < num_nombres; i++) {
		arrNombres[i] = "Mascotita " + (i + 1);
	}
	return arrNombres;
}

var concatenadorCheckboxes = function (unArr) {
	var cadena = "";
	if (unArr) for (var i = 0; i < unArr.length; i++) {
		cadena += '<input type="checkbox" class="unaMasc" value="' + unArr[i] + '">' + unArr[i] + '<br>';
	}
	return cadena;
}

function asociaClicks() {
	var seleccionadosDiv = document.getElementById('seleccionados');
	var listaChkMascs = document.getElementsByClassName('unaMasc');

	if (listaChkMascs) for (var i = 0; i < listaChkMascs.length; i++) {
		listaChkMascs[i].onclick = function () {
			if (seleccionados.indexOf(this.value) < 0) seleccionados.push(this.value);
			else seleccionados.splice(seleccionados.indexOf(this.value), 1);
			console.log(seleccionados);
			seleccionadosDiv.innerHTML = seleccionados.join(', ');
		}
	}
}

var mascotas = [];
var seleccionados = [];

mascotas = generadorNombres(10);

document.getElementById('lista').innerHTML = concatenadorCheckboxes(mascotas);

asociaClicks();



