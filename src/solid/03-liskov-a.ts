import { Tesla, Audi, Toyota, Honda, Vehicle, Ford } from "./03-liskov-b";

(() => {
  /*
    ------ Principio de sustitución de Liskov ------
    
    'Las funciones que utilicen punteros o referencias a clases base deben ser capaces de usar objetos de clases derivadas sin saberlo'

    'Siendo U un subtipo de T, cualquier instancia de T debería poder ser sustituida por cualquier instancia de U sin alterar
    las propiedades del sistema'

    'Si una clase A es extendida de una clase B, deberíamos ser capaces de sustituir cualquier instancia de A por cualquier
    objeto de B sin que el sistema deje de funcionar o se presenten comportamientos inesperados'

    En este ejmplo: 
    El método printCartsSeats recibe como parámetro un array de instancias que pueden ser SOLAMENTE de las clases Tesla, Audi,
    Toyota u Honda.
    Esto viola el principio de sustitución de Liskov debido a que añadir alguna instancia de clases diferentes a las mencionadas, 
    entonces debería modificar los parámetros que puede recibir la función.

    Solución: Se modificó el parámetro del método printCartSeats de manera tal que reciba instancias de clases extendidas de la
    clase abstracta Vehicle.
  */

  const printCarSeats = (/* cars: (Tesla | Audi | Toyota | Honda)[] */ cars: Vehicle[]) => {

    //Violenta el principio de Abierto y Cerrado
    // for (const car of cars) {
    //   if (car instanceof Tesla) {
    //     console.log("Tesla", car.getNumberOfSeats());
    //     continue;
    //   }
    //   if (car instanceof Audi) {
    //     console.log("Audi", car.getNumberOfSeats());
    //     continue;
    //   }
    //   if (car instanceof Toyota) {
    //     console.log("Toyota", car.getNumberOfSeats());
    //     continue;
    //   }
    //   if (car instanceof Honda) {
    //     console.log("Honda", car.getNumberOfSeats());
    //     continue;
    //   }
    //   if (car instanceof Ford) {
    //     console.log("Ford", car.getNumberOfSeats());
    //     continue;
    //   }
    // }

    cars.forEach((car) => {
      console.log(car.constructor.name, car.getNumberOfSeats());
    });

  };

  const cars = [
    new Tesla(7), 
    new Audi(2), 
    new Toyota(5), 
    new Honda(5), 
    new Ford(2)
  ];

  printCarSeats(cars);
})();
