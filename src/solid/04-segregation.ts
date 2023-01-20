/*
  ----- Principio de segregación de interfaz -----
  Una clase no deben ser obligada a utilizar metodos de herencia
  o implementación si esos métodos no los va a utilizar.
  Que estos métodos estén dentro de una clase vuelven a la clase sensible a cambios
  cambios en esos métodos, obligándola a modificarse cada que estos cambios sucedan.
*/
// interface Bird {
//   eat(): void;
//   fly(): void;
//   run(): void;
//   swim(): void;
// }


interface Bird {
  eat(): void;
}

interface FlyingBirds {
  fly(): void;
}

interface RunnigBird {
  run(): void;
}

interface SwimmerBird {
  swim(): void;
}

class Tucan implements Bird, FlyingBirds {
  
  public eat() {}
  public fly() {}
}

class Hummingbird implements Bird, FlyingBirds {

  public eat() {}
  public fly() {}
}

class Ostrich implements Bird, RunnigBird {

  public eat() {}
  public run() {}
}

class Penguin implements Bird, SwimmerBird {

  public eat() {}
  public swim() {}
}