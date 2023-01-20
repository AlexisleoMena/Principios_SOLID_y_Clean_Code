(()=>{
  // Aplicando el principio de responsabilidad única
  // Prioriza la composición frente a la herencia

  type Gender = 'M'|'F';

  interface PersonProps {
    // name     : string;
    firstName     : string;
    lastName     : string;

    gender   : Gender;
    birthdate: Date;
  }

  //La clase Person posee bajo acomplamiento
  class Person {
    // public name     : string;
    public firstName     : string;
    public lastName     : string;

    public gender   : Gender;
    public birthdate: Date;

    constructor({ 
      /* name, */
      firstName,
      lastName,

      gender,
      birthdate
     
    }: PersonProps ){
      // this.name = name;
      this.firstName = firstName;
      this.lastName = lastName;

      this.gender = gender;
      this.birthdate = birthdate;
    }
  }


  interface UserProps {
    email     : string;
    role      : string;
  }

  //La clase User posee bajo acomplamiento
  class User {

    public email       : string;
    public role        : string;
    private lastAccess : Date;

    constructor({ email, role }: UserProps ){
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }


  interface SettingsProps {
    lastFolderOpen  : string;
    workingDirectory: string;
  }

  //La clase Settings posee bajo acomplamiento
  class Settings {
    public workingDirectory: string; 
    public lastFolderOpen  : string; 

    constructor({ workingDirectory, lastFolderOpen }: SettingsProps ){
      this.workingDirectory = workingDirectory;
      this.lastFolderOpen = lastFolderOpen;
    }
  }
  
  
  // Nuevo User Settings
  interface UserSettingsProps {
    birthdate       : Date;
    email           : string;
    gender          : Gender;
    lastFolderOpen  : string;

    // name            : string;
    firstName       : string;
    lastName        : string;

    role            : string;
    workingDirectory: string;
  }

  //La clase UserSettings posee alto acomplamiento
  class UserSettings {

    public person  : Person;
    public user    : User; 
    public settings: Settings;

    constructor({ 
      /* name, */ firstName, lastName, gender, birthdate,
      email, role,
      workingDirectory, lastFolderOpen,
    }: UserSettingsProps) {
      this.person = new Person({ /* name, */ firstName, lastName, gender, birthdate });
      this.user = new User({ email, role });
      this.settings = new Settings({ workingDirectory, lastFolderOpen })
    }
  }
  


  const userSettings = new UserSettings({
    birthdate: new Date('1985-10-21'),
    email: 'fernando@google.com',
    gender: 'M',
    lastFolderOpen: '/home',
    // name: 'Fernando',
    firstName: 'Fernando',
    lastName: 'Fernando',

    role: 'Admin',
    workingDirectory: '/usr/home'
  });

  console.log({ userSettings, credentials: userSettings.user.checkCredentials() });
  
})()