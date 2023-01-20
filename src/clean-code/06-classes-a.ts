(() => {

  type Gender ='M'|'F'

  class Person {
    constructor(
      public name     : string, 
      public gender   : Gender,
      public birthdate: Date
    ){}
  }

  class User extends Person {
    public lastAccess: Date;
    constructor(
      public email: string,
      public role : string,
      name        : string,
      gender      : Gender,
      birthDate   : Date
    ){
      super(name, gender, birthDate);
      this.lastAccess = new Date()
    }

    checkCredentials() {
      return true;
    }
  }

  //Clase que violenta el principio de responsabilidad única
  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder  : string,
      email                  : string,
      role                   : string,
      name                   : string,
      gender                 : Gender,
      birthDate              : Date
    ){
      super(email, role, name, gender, birthDate);
    }
  }

  const newPerson = new Person('Alexis', 'M', new Date('1995-10-02'))
  console.log(newPerson)

  const newUser = new User( 
   'alexismena2690@gmail.com',
   'Admin', 
   'Alexis', 
   'M', 
    new Date('1995-10-02')
  )
  console.log(newUser)

  const userSettings = new UserSettings(
    '/user/home',
    '/home',
    'alexismena2690@gmail.com',
    'Admin',
    'Alexis',
    'M',
    new Date('1995-10-02'),
  )
  console.log(userSettings)

})()