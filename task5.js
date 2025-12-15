// ¿Puedes pedirle al usuario que ingrese la cantidad de líneas que se generarán, o que genere una línea específica?

const prompt = require("prompt-sync")();
const num = Number(prompt("Ingrese el numero de lineas que quires que sean generadas: "));

for (let i = 0; i < 1; i++) {
    console.log("This is Task Five!");
  };


  for (let i = 0; i < 1; i++) {
    console.log("This is Task Four!");
  };

for(let i = 1; i <= num; i++){
  if(i % 7 == 0 &&i % 5 == 0 && i % 3 == 0){
    console.log("FizzBuzzWoof")
    }else if(i % 5 == 0 && i % 7 == 0){
      console.log("BuzzWoof")
      }else if(i % 7 == 0 && i % 3 == 0){
        console.log("FizzWoff")
        } else if(i % 5 == 0 && i % 3 == 0){
          console.log("FizzBuzz")
          }else if(i% 7 == 0){
            console.log("Woof")
            } else if(i % 5 ==0){
              console.log("Buzz");
              }else if( i % 3 == 0){
                console.log("Fizz");
                }else{
                  console.log(i);
                  }
}