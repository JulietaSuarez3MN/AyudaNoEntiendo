/* declarar varialble: let nombre_variable;
    declarar constante: const nom_constante = <valor>; */
console.log("Hola Mundo");

/*  */
let  saludo = "hola como estas";
let num = 25;
let num_coma = 2.5;
let existe = true;

console.log("Variable saludo " + saludo + " " + (typeof saludo));
console.log("Variable num " + num + " " + (typeof num));
console.log("Varaible num_coma " + num_coma + " " + (typeof num_coma));
console.log("Variable existe " + existe + " " + (typeof existe));

num = "hola";
console.log("Variable num " + num + " " + (typeof num));
/* typeof es una funcion que nos indica el tipo de dato de la variable en ese momento de ejecucion */

const parrafo = document.getElementById("txt");
parrafo.textContent = "cambiando texto desde js";

const boton = document.getElementById("btn");
boton.addEventListener("click", () => { parrafo.textContent = "Cambiando texto desde js";
});

document.getElementById("btn-error").addEventListener("click" , () => {
    alert("Error 404");
});
