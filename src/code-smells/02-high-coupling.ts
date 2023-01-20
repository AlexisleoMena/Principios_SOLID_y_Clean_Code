(()=>{
  // No aplicando el principio de responsabilidad única
  type Gender = 'M'|'F';

  // Alto Acoplamiento
  //separar la propiedad name en dos propiedades: firstName y lastName

  //La clase Person posee bajo acomplamiento
  class Person {
    constructor(
      // public name: string,
      public firstName: string,
      public lastName: string,

      public gender: Gender,
      public birthdate: Date,
    ){}
  }

  //La clase User posee alto acomplamiento
  class User extends Person {
    constructor(
      public email: string,
      public role: string,
      private lastAccess: Date,

      // name: string,
      firstName: string,
      lastName: string,

      gender: Gender,
      birthdate: Date,
    ){
      super(
        /* name, */ 
        firstName, 
        lastName, 
        
        gender, 
        birthdate
      );
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  //La clase UserSettings posee alto acomplamiento
  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastFolderOpen: string,
      email     : string,
      role      : string,

      // name      : string,
      firstName : string,
      lastName  : string,

      gender    : Gender,
      birthdate : Date,
    ){
      super(
        email,
        role,
        new Date(),

        // name,
        firstName,
        lastName,

        gender,
        birthdate
      )
    }
  }
    


  const userSettings = new UserSettings(
    '/urs/home',
    '/development',
    'alexismena2690@google.com',
    'F',

    // 'Fernando',
    'Alexis',
    'Mena',

    'M',
    new Date('1985-10-21')
  );

  console.log({ userSettings, credentials: userSettings.checkCredentials() });
  
})()