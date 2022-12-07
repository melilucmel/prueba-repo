/* let apodo = "Mile";
let nombre = "Melina";
let apellido = "Lucero";
let edad = 35;
let mascota = "No tengo mascota";
console.log(nombre, apellido, edad, mascota) */

// PROMPT //
/* let entrada = prompt("Ingresar un mensaje");
let salida = entrada + " " + "ingresado"; */
/* let salida =alert(entrada + " " + "ingresado"); */

/* alert(salida) */

/* console.log(salida) */
/* alert("Hola a Tod@s") */


// Práctica Suma //
let numeroUno = 5;
const numeroDos = 10;
let resultadoSuma = numeroUno + numeroDos;
/* console.log (resultadoSuma) */

// Práctica Multiplicación //
let resultadoMultiplicar = numeroUno * numeroDos;
/* console.log (resultadoMultiplicar) */

// Práctica Prompt //
/* let misDatos = nombre + " " + apellido + " " +  edad
prompt (misDatos) */

/* let entryNumber = prompt("Ingrese un valor numérico: ");
if(entryNumber > 1000) {
    alert("El número es mayor a 1000")
}else{
    alert("El número es menor o igual a 1000");
 let = IngreseNombre = prompt("Ingresá tu Nombre");
} */



/* 
// Práctica Alert //
alert("Estás ingresando a Ventana al Mundo")
 */

// Práctica Prompt+Alert //
/* let entrada = prompt("Ingresá tu nombre");
let salida = "Hola " + entrada;
alert(salida)
console.log(salida) */


// Práctica Condicionales //
/* if (a > 5) {
    console.log("El número es mayor a 5");
} else {
    console.log("El número es menor a 5");
} else {
    console.log("El número es igual a 5");
}
 */


// Práctica Condicional+Prompt //
/* 
let entryNumer = prompt("Ingresá un número");

if (entryNumer < 5) {
    alert("El número es menor a 5");
    console.log("El número es menor a 5");
} else {
    alert("El número es mayor a 5");
    console.log("El número es mayor a 5");
} 
if (entryNumer === 1)
    alert("El número es 1");
    console.log("El número es 1"); */



// Práctica Operador Condicional //
/* let edadPrueba = 16;
let esMayorDeEdad = edadPrueba > 18 ? true : false; */



// Práctica Prompt Consigna //
/* let entryNumber = prompt("Ingresá un número menor a 1000");
if (entryNumber > 1000) {
    alert("El número es mayor a 1000");
    console.log("El número es mayor a 1000");
} else {
    console.log("El número está correcto");
} */


// PRÁCTICA DE CONSIGNA ALGORTIMO CON PROMPT //
/* if(entryNumber >= 10) {
    if(entryNumber <=50) {
        alert("El valor es mayor o igual a 10 y menor o igual o 50");
    } else {
        alert("El valor es menor a 10 o mayor a 50")
    }
} */



// PRÁCTICA -CONSIGNA- ARRAYS //
/* let colores = ['azul', 'rojo', 'amarillo'],
let numeros = [1, 2, 3, 4],
let booleanos = [true, false],
let variete = [103, 'persona', true, 'numeros'];
console.log(colores),
console.log(colores.length),
console.log(variete[1]), */

// PRÁCTICA ARRAY DATO 0 //
/* let datos = ['dato 1', 'dato 2', 'dato 3'];
console.log(datos[0]),
console.log(datos[3]), */

// PRÁCTICA ARRAY  de ARRAYS //
/* let mascotero = [
    ['gato', 'perro', 'hamster', 'vibora']
]
console.log(mascotero.length) */


// PRÁCTICA -CONSIGNA- ARRAY.INCLUDES //
/* let listaDeSuper = ['huevos', 'harina', 'pan', 'lentejas']
let productoSuper = prompt("Ingresá un producto")

if (!productoSuper) {
    alert("No se ingresó ningún producto")
} else if (listaDeSuper.includes(productoSuper)) {
    alert("El Producto ya está en la lista")
 } else {
    listaDeSuper.push(productoSuper)
    alert("El producto se agregó a la lista y contiene: " + listaDeSuper);
    console.log(listaDeSuper)
 }
 */

// PRÁCTICA -CONSIGNA- DOM WRITE + PROMPT // 
/* 
let NewEntryNumber = prompt("Ingresá un nuevo número");

if (!NewEntryNumber) {
    document.write("No se ha ingresado ningún valor")
} else if (NewEntryNumber > 10) {
    document.write("El número es mayor a 10")
} else if (NewEntryNumber <= 10) {
    document.write("El número es menor o igual a 10")
} else {
    document.write("El valor ingresado no es un número")
}
 */


// PRÁCTICA OPERADOR LÓGICO AND // 
/* let nuevaMascota = "Perro";
let edadMascota = 1;
    if(nuevaMascota == "Perro" && edadMascota < 2) {
        console.log("Tu perro es cachorro")
    }
    if(nuevaMascota == "perro" || "gato")
        console.log("Tu mascota es bienvenida")
    if(!nuevaMascota)
        console.log("No tenés mascotas") */


//////////////////////////
// PRÁCTICA FUNCIONES //

/* function saludar(nombreSaludo, apellidoSaludo, serieFavorita) {
    console.log("Hola " + nombreSaludo + " " + apellidoSaludo + " tu serie favorita es " + serieFavorita);
}
saludar("Harry", "Potter", "La Pantera Rosa") */


// FUNCIONES //
/* function longitudNombre(nombre) {
    return longitudNombre.length;
}
longitudNombre(Mariana) */



// PRÁCTICA DOM //

/* let etiqueta = document.querySelector("listado");
etiqueta.style.backgroundColor = "red"
 */


// PRÁCTICA EVENTO //
/* let button = document.querySelector("#buttonTest");
button.addEventListener("click", (event) => {
    if(event.target) {
        console.log("¡Hola!")
    }
}) */

let list = document.querySelector()
let buttonMouseOver = document.querySelector("#buttonMover");
 
buttonMouseOver("mouseover", (e) => {
    if (e.target) {
        user.toggleAttribute("red");
    }
})

