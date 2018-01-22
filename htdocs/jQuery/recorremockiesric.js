function analyzeUrl(nombre,	quien){
	$.get(
		listaurls[nombre],
		function(data) {
			console.log("success:",data);
			if(Array.isArray(data))for (var i = 0; i < data.length; i++) {
				if(data[i].indexOf(quien)>=0) console.log("Mi amigo es:", nombre);
			}
		}
		).fail(function(){
			console.log("Erroneo",nombre);
		});
}

var listaurls={
	"marta esteban":"http://www.mocky.io/v2/5a578d022e0000623d120239",
	"angel":"http://www.mocky.io/v2/5a578d822e00006d3d120240",
	"ruben":"http://www.mocky.io/v2/5a5784bd2e0000623a1201eb",
	"daniil":"http://www.mocky.io/v2/5a5783742e0000fa391201dc",
	"marta martinez":"http://www.mocky.io/v2/5a5784882e00008f3b1201e9",
	"joan":"http://www.mocky.io/v2/5a5783b82e00006d3b1201e0",
	"josep":"http://www.mocky.io/v2/5a5784172e00006d3b1201e5",
	"johnny":"http://www.mocky.io/v2/5a578db02e00006f3d120243",
	"ismail":"http://www.mocky.io/v2/5a57851b2e0000863b1201ef",
	"alba":"http://www.mocky.io/v2/5a5786222e0000aa3b1201f9",
	"iñigo":"http://www.mocky.io/v2/5a5783452e0000c4391201d8",
	"olga":"http://www.mocky.io/v2/5a5783402e0000c4391201d6",
	"vera":"http://www.mocky.io/v2/5a5783072e0000623a1201d3",
	"manuel":"http://www.mocky.io/v2/5a578cf92e00004d3d120238"
};

var nombres=Object.keys(listaurls);

var quien="ismail";

for (var i = 0; i < nombres.length; i++) {
	analyzeUrl(nombres[i],quien);
}