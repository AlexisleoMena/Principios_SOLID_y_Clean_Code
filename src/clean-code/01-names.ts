(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    // const fs = [
    //     { id: 1, f: false },
    //     { id: 2, f: false },
    //     { id: 3, f: true },
    //     { id: 4, f: false },
    //     { id: 5, f: false },
    //     { id: 7, f: true },
    // ]; 
    const filesToEvaluate = [
      { id: 1, flagged: false },
      { id: 2, flagged: false },
      { id: 3, flagged: true },
      { id: 4, flagged: false },
      { id: 5, flagged: false },
      { id: 7, flagged: true },
  ]; 


    // Archivos marcados para borrar - files to delete
    // const arhivos = fs.map( f => f.f );
    const filesToDelete = filesToEvaluate.map( file => file.flagged );


    //Malos nombres
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea: Poner nombres con sentido semantico
        
    // día de hoy - today
    // const ddmmyyyy = new Date();
    const today = new Date();

    
    // días transcurridos - elapsed time in days
    const elapsedTimeInDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory
     const numberOfFilesInDirectory = 33; //Restar importancia a la cantidad de caracteres ya que los blounders terminan ofuszcando el codigo.
    
    // primer nombre - first name
    const firstName = 'Fernando';
    
    // primer apellido - last name
    const lastName = 'Herrera';

    // días desde la última modificación - days since modification
    const daysSinceLastModification = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const NaxClassesPerStudent = 6;


})();
