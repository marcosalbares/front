function ListaLocalesController() {
    this.locales = [];
    // this.modalidad = [];
    // this.tipoDeLocal = [];
    // this.modalidadesFormatter = new ModalidadesFormatter();
}
// var datos = {this.titulo ="Temperatura",
//     "texto":"¿Prefieres una plato para entrar en calor o fresco?",
//     "inputType":"radio",
//     "inputName":"temp",
//     "inputId":["Caliente"; "Frio"], 
//     "labelForTexto":["Caliente"; "Frio"],
//     };
function Ajax(method, url, onSuccess) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            onSuccess(JSON.parse(this.responseText));
        }
    };
    xhttp.open(method, url, true);
    xhttp.send();
}
ListaLocalesController.prototype.getLocales = function() {
    Ajax("GET", "http://www.mocky.io/v2/5a3b8e73300000591282d203", (data) => {
        this.locales = data;
    });
}
// ListaLocalesController.prototype.getModalidad = function() {
//     Ajax("GET", "http://www.mocky.io/v2/5a3b8ca43000007a1082d1fc", (data) => {
//         // this.modalidad = data;
//         this.modalidadesFormatter.modalidades = data;
//         this.modalidadesFormatter.ShowAsLi(document.getElementById("modalidadesContainer"));
//     });
// }
// function ModalidadesFormatter(pModalidades) {
//     this.modalidades = pModalidades;
// }
// ModalidadesFormatter.prototype.ShowAsLi = function(container) {
//     container.innerHTMl = "";
//     var ul = document.createElement("ul");
//     for (let i = 0; i < this.modalidades.length; i++) {
//         var li = document.createElement("li");
//         li.innerText = this.modalidades[i];
//         ul.appendChild(li);
//     }
//     container.appendChild(ul);
//     // container.appendChild(ul);
// }
var localesCtrl;
function Init() {
    localesCtrl = new ListaLocalesController();
    localesCtrl.getLocales();
    // localesCtrl.getModalidad();
}