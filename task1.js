// Refer to Task 1 in your Instructions to complete this task
// Puedes crear un programa en JavaScript que muestre todos los números del 1 al 105?
// Fallarás esta tarea si tu programa se detiene en 104 números. ¡Las computadoras son muy literales!

const prompt = require("prompt-sync")();
const name = prompt("Ingresa tu nombre");

for(let i = 1; i <= 105; i++){
    console.log(i);
}