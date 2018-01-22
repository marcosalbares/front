function Alumno(pNom, pApell) {
    this.nom = pNom;
    this.apellido = pApell;
    this.curso;
    this.grupo;
}
function Curso(pNom) {
    this.nom = pNom;
    this.duracion = 0;
    this.alumnos = [];
    this.profes = [];
    this.aula;
}
function Aula(pNom) {
    this.nom = pNom;
    this.curso;
}
function Profe(pNom) {
    this.nom = pNom;
    this.curso;
}
function Grupo(pNom) {
    this.nom = pNom;
    this.alumnos = [];
}

var alumnos = [];
var cursos = new Curso("FED");
var profes = [];
profes[0] = new Profe("Alex");
profes[1] = new Profe("Ricardo");
var grupos = [];
grupos[0] = new Grupo("Dexter");
grupos[1] = new Grupo("Culinary");
grupos[2] = new Grupo("Geek");
var aulas = [];
aulas[0] = new Aula("lavabo");
aulas[1] = new Aula("sala principal");
aulas[2] = new Aula("secretábiertoria");

Alumno.prototype.matricularse = function (pCurso) {
    this.curso = pCurso;
    pCurso.alumnos.push(this);
}
Alumno.prototype.agruparse = function (pGrupo) {
    pGrupo.alumnos.push(this);
}
Profe.prototype.contratar = function (pCurso) {
    this.curso = pCurso;
    pCurso.profes.push(this);
}
Curso.prototype.localizar = function(pLugar){
    this.aula = pLugar;
    pLugar.curso = this;
}

for (let i = 0; i < 10; i++) {
    alumnos[i] = new Alumno("Nom" + i, "Apell" + i)
    alumnos[i].matricularse(cursos);
    if (grupos[0].alumnos.length < 5) {
        alumnos[i].agruparse(grupos[0]);
    } else {alumnos[i].agruparse(grupos[1]);}
}

for (let i = 0; i < profes.length; i++) {
    profes[i].contratar(cursos);    
}
cursos.localizar(aulas[1]);

var titcurso = cursos.nom;
var titprofes = "Profes"
var titaula = aulas[1].nom;
var titgrupo = "";
for (let i = 0; i < grupos.length; i++) {
    titgrupo += grupos[i].nom + " ";
}

var titulos = ["Curso", "Aula", "Profes", "Grupos", "Alumnos"];
var subseccion = []
// var titprofes = "";
/*for (let i = 0; i < profes.length; i++) {
    titprofes += profes[i].nom + " ";
}*/
var texto = document.getElementById("resum")
texto.innerHTML = "<h2>Curso</h2>"+titcurso+titprofes+titaula+titgrupo;

/*function Clase() {
    this.alumnos = [];
}
Clase.prototype.matricula = function (alumno) {
    this.Alumnos.push(alumno);
}
function Alumnos(pNom, pApell) {
    this.nom = pNom;
    this.apell = pApell;
    return alumno;
}
boton.onclick = Alumnos()
boton.onclick = Mostrar()

// function Mostrar() {}
var boton = document.getElementById("btnMatricula")
var claseDeFront = new Clase();*/