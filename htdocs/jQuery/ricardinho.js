var valores = {};

$('form button').click(function (evento) {
	evento.preventDefault();
	valores = {};
	//Para inputs chkbox y radio
	$('form input:checked[type=checkbox],form input:checked[type=radio]').each(function () {
		valores[this.name] = (valores[this.name] ? valores[this.name] + ',' : '') + this.value;
	});
	//Resto de inputs
	$('form input').not('form input[type=checkbox],form input[type=radio]').each(function () {
		valores[this.name] = (valores[this.name] ? valores[this.name] + ',' : '') + this.value;
	});

	$('form textarea,form select').each(function () {
		valores[this.name] = this.value;
	});
	console.log(valores);
})

// $().click(function (event) {
// 	$.getJSON(
// 		,
// 		(),
// 		function(json, textStatus) {
// 			console.log(json, textStatus);
// 		}
// )});

$('#pedir').click(function (e) {
	e.preventDefault();
	$.getJSON('http://www.mocky.io/v2/5a576e7d2e0000873612016f', (data) => {
		$('#recibido').html(data.ok);
	},
		function (data, textStatus, xhr) {
			console.log(data, textStatus, xhr);
		}
	);
});


$('#enviar').click(function (e) {
	e.preventDefault();
	$.post('http://www.mocky.io/v2/5a576e7d2e0000873612016f',
		{ valores },
		function (data, textStatus, xhr) {
			console.log('respuesta del server: ' + data, textStatus, xhr);
		}
	);
});

m