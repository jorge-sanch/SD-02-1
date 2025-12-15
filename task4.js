// Refer to Task 4 in your Instructions to complete this task

// ¿Puedes continuar el patrón reemplazando también cada número divisible por 7 con Woof, junto con las otras condiciones?

// El orden lógico de salida cuando un número cumple todas las condiciones es: Fizz, luego Buzz, luego Woof.

for (let i = 0; i < 1; i++) {
    console.log("This is Task Four!");
  };

for(let i = 1; i <= 105; i++){
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