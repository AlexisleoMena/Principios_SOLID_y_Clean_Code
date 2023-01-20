const Singleton = (function () {
    
  let instance;

  function createInstance() {
    return new Object('I am the instance');
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})(); 

function main() {

  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();

  console.log('Misma instancia? ', (instance1 === instance2));
  //"Única instancia en un ambito global, y es la misma instancia no importa cuantas
  // veces creemos 'nuevas instancias'".

  //PROS: 
  //  - Garantiza una única instancia de la clase a lo largo de toda la aplicación
  
  //CONTRAS:
  // - Vive en un contexto global. 
  // - Puede ser modificado por cualquiera y en cualquier momento.
  // - No es rentable. 
  // - Dificil de testear debido a su ubicación.
}

main();

//node src/code-smells/01-singleton