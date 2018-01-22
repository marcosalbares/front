// var pregunta = {};
// $('#submit').click(function (evnt) {
//     evnt.preventDefault();
//     // pregunta = {};
//     // var request = new XMLHttpRequest();
//     var url = "http://www.mocky.io/v2/5a576e6e2e0000883612016b";
//     var badurl = "http://www.mocky.io/v2/5a587ee52d0000de13d2e51x6";

//     // comprobacion email
//     function validarEmail(valor) {
//         return email.validity.valid
//     }

//     // coje los datos de los inputs y los mete en pregunta
//     $('.field').each(function () {
//         pregunta[this.name] = this.value;
//     });

//     console.log(pregunta);

//     if (pregunta.nombre && pregunta.email && pregunta.mensaje && validarEmail(pregunta.email)) {
//         $.post(
//             url,
//             pregunta,
//             function (data, textStatus, jqXHR) {
//                 $('#modalmsg').html('¡Muchas gracias, contestaremos a tu mensaje lo antes posible!');
//                 $('#modalfeedback').modal('show');
//                 console.log('¡recibido!');
//                 $('.field').val('');
//             }
//         )
//             .fail(
//             function (data, textStatus, jqXHR) {
//                 $('#modalmsg').html('Lo sentimos, no se ha podido acceder al servidor :(</br> Puedes ponerte en contacto con nosotros en nuestras redes sociales');
//                 $('#modalfeedback').modal('show');
//                 console.log('Error en el servidor');
//             }
//             );
//     }
//     else {
//         $('#modalmsg').html('Completa todos los campos correctamente para poder enviar el mensaje');
//         $('#modalfeedback').modal('show');
//     }
// });

// $('#modal').modal({
//     backdrop: false,
//     keyboard: false,
//     focus: true,
//     show: false
// });




// $.get("url", data,
//     function (data, textStatus, jqXHR) {

//     },
//     "dataType"
// )
// .fail(
//     function (data, textStatus, jqXHR) {
//         $('#modalmsg').html('Lo sentimos, no se ha podido acceder al servidor :(</br> Puedes ponerte en contacto con nosotros en nuestras redes sociales');
//         $('#modalfeedback').modal('show');
//         console.log('Error en el servidor');
//         setTimeout(enlacehome, 6000);
//     }
//     );







// $.ajax({
//     type: "method",
//     url: "http://www.mocky.io/v2/5a576e6e2e0000883612016b",
//     // data: "data",
//     // dataType: "dataType",
//     // async: "false",
// }).done(
//     function (data, textStatus, jqXHR) {
//         console.log('Error en el servidor');
//     }
//     )
//     .fail(
//             console.log('Error en el servidor')

//         );

// var texto_a_buscar = "";
// $("#busqueda").keypress(function () {
//     clearTimeout(temp);
//     temp=setTimeout(function(){
//     var texto_a_buscar = busqueda.value;
// }, 800);
// });


// $.get("http://www.mocky.io/v2/5a54ae822d00005f235b1cd2", data,
//     function (data, textStatus, jqXHR) {
//         lista_articulos = data;
//         console.log(lista_articulos);
//     },
//     "dataType"
// );
var lista_articulos = [];
$.get("http://www.mocky.io/v2/5a54ae822d00005f235b1cd2",
    (data) => {
        lista_articulos = data;
    });


function buscando(texto_a_buscar) {
    var filtrado = [];
    for (let index = 0; index < lista_articulos.length; index++) {
        if (texto_a_buscar = lista_articulos.titulo) {
            filtrado[index] = lista_articulos[index];
        }
    }
}



for (let i = 0; i < filtrado.length; i++) {
    $("#sugerencias").append("<li>Título: "+filtrado[i].titulo+"</li>");
}

var al = [{"esto":"uno"}, {"esto":"dos"}];

for (let i = 0; i < al.length; i++) {
    $("#prim").append("<li>tit: "+al[i].esto+"</li>");
}


    // temporizador=setTimeout(function(){
    //     alert("hola");

    // },2000);

    // setTimeout(() => {
    //     var texto_a_buscar = busqueda.value;
    //     alert("hola");
    // }, 3000);