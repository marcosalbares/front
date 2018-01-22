// for (let v = 0; v < lado; v++) {    
/*var white = document.createElement("div ");
var element = document.getElementById("sq");
element.appendChild(white);

var black = document.createElement("div");
var element = document.getElementById("sq");
element.appendChild(black);*/

const width = 50;
const l = 5;
var tablero = document.getElementById("tablero");

/*for (let x = 0; x < l; x++) {
    for (let y = 0; y < l; y++) {
        let html = "";
        html += "<div style='left:" + width * x + "px;" + "top:" + width * y + "px;'";
        if ((x + y) % 2 == 0) {
            html += " class='blanco'></div>";
        }
        else {
            html += " class='negro'></div>";
        }
        tablero.innerHTML += html;
    }
}*/

for (let x = 0; x < l; x++) {
    for (let y = 0; y < l; y++) {
        let html = "";
        html += "<div style='left:" + width * x + "px;" + "top:" + width * y +
            "px;'" + ((x + y) % 2 ? " class='blanco'></div>" : " class='negro'></div>");
        tablero.innerHTML += html;
    }
}

var hoja = document.createElement('style')
hoja.innerHTML = ".blanco {border: 1px solid yellow; background: linear-gradient(to top right, red,black,  blue, purple, green); width: 50px; height: 50px;}";
document.body.appendChild(hoja);

var hoja2 = document.createElement('style')
hoja2.innerHTML = ".negro {border: 1px solid orangered;background: linear-gradient(to bottom, red,orange,  blue, purple, yellow); width: 50px; height: 50px;}";
document.body.appendChild(hoja2);

/*titulo.style.color = "red";
document.getElementById("titulo").style.color = "blue";*/
