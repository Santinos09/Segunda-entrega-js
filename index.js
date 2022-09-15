let nombre;
let primeranota;
let segundanota;
let promedio;
let counter = 0;
let mail;

localStorage.setItem ('bienvenida', 'Bienvenido a la pagina de Matematica. Aqui encontraras las notas de los alumnos pertenecientes a la clase');
let bienvenida = localStorage.getItem ('bienvenida');

let welcome = document.createElement ("p");
parrafo.innerHTML = bienvenida;


function profesor (nombre, edad, materia){
    this.nombre = nombre;
    this.edad = edad;
    this.materia = materia;
};
var profesor1 = new profesor("Santino",18,"Matematica");
console.log(profesor1);

mail = prompt ("Ingrese su correo electronico");
sessionStorage.setItem('mail', 'El correo electronico de la persona ingresado es '+mail);
let correo = sessionStorage.getItem ('mail');
let gmail = document.createElement ("p");
gmail1.innerHTML = "Ingresaste con el siguiente correo electronico: "+mail;



while (counter < 2){
nombre = prompt("Nombre del alumno");
primeranota = parseFloat(prompt("Primer nota"));
segundanota = parseFloat(prompt("Segunda nota"));
promedio = (primeranota+segundanota)/2;

if(promedio >=6){
    let notaalumnos = document.createElement("div");
    notas.innerHTML = ("<p>El promedio del alumno "+nombre+" esta aprobado con una nota de "+promedio+". Felicitaciones!</p>");
}else{
    let notaalumnos2 = document.createElement("div");
    notas2.innerHTML = ("<p> El promedio de " +nombre+ " esta desaprobado");
}
counter++;
}

let alumnos = ["La cantidad total de alumnos son "+counter]
let cantidad = document.createElement("p");
    cantidadalumnos.innerHTML = ("<p>La cantidad total de alumnos son " +counter+"</p>");

let personas = document.getElementById("profesores");
let profesores = ["Los encargados de este curso fueron: Santino, Pedro, Ramiro, Javier"];
for (const profesor of profesores){
    let li = document.createElement ("li");
    li.innerHTML = profesor
    personas.appendChild(li);
}

let Matematica = document.createElement ("h1");
titulo.innerHTML = "<h1>Matematica - Colegio Nacional de Cordoba</h1>";
document.body.append (Matematica);

let MeGusta = 
document.getElementById("btnMeGusta")
MeGusta.addEventListener("click", respuestaClick)
function respuestaClick (){
    alert("A la persona le gusto esta pagina. Gracias por su opinion!")
}

const directivos = [{id:1, directivo:"Director", nombre: "Pedro"},
{id:2, directivo: "Vicedirector", nombre: "Sandra"},
{id:3, directivo: "Comision", nombre: "Javier, Lucas, Maria"}];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor)};

for (const directivo of directivos){
    guardarLocal ("Lista de directivos", JSON.stringify(directivos));
}

const almacenado = JSON.parse(localStorage.getItem("Lista de directivos"));
console.log (almacenado)

