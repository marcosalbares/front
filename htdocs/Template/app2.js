class ListaLocalesController {
    constructor() { this.locales = []; };
    getLocales() {
        Ajax("GET", "http://www.mocky.io/v2/5a3b8e73300000591282d203", (data) => {
            this.locales = data;
        }
        );
    }
}

function Ajax(method, url, onSuccess) {
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        if (this.status == 200) {
            onSuccess(JSON.parse(this.responseText));
        }
    };
    xhttp.open(method, url, true);
    xhttp.send();
}

var localesCtrl;
function Init() {
    localesCtrl = new ListaLocalesController();
    localesCtrl.getLocales();
}