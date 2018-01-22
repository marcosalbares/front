/*

*/
function Classe() {
    this.alumnes = [];
}

Classe.prototype.matricula = function(alumne) {
    this.alumnes.push(alumne);
}

Classe.prototype.creaFormulariMatricula = function(container) {
    var lblNom = document.createElement("label");
    var lblCognom = document.createElement("label");
    var txtNom = document.createElement("input");
    var txtCognom = document.createElement("input");
    lblNom.innerText = "Nom";
    lblNom.htmlFor = txtNom;
    lblCognom.innerText = "Cognom";
    lblCognom.htmlFor = txtCognom;

    var btnRegistre = document.createElement("button");
    btnRegistre.innerText = "Registre";
    btnRegistre.onclick = () => {
        this.matricula(new Alumne(txtNom.value, txtCognom.value));
        txtNom.value = "";
        txtCognom.value = "";
    }

    container.appendChild(lblNom);
    container.appendChild(txtNom);
    container.appendChild(lblCognom);
    container.appendChild(txtCognom);
    container.appendChild(btnRegistre);
}

function Alumne(pNom, pCognom) {
    this.nom = pNom;
    this.cognom = pCognom;
}

Alumne.prototype.mostram = function() {
    alert(this.nom + " " + this.cognom);
}