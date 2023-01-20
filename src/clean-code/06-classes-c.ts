(() => {
  //Aplicando el principio de responsabilidad única.
  //Priorizar la composición ante la herencia

  type Gender ='M'|'F'

  interface PersonProps {
    birthDate: Date;
    gender   : Gender;
    name     : string;
  }

  class Person {
    public birthDate: Date;
    public gender: Gender;
    public name: string;

    constructor( {name, gender, birthDate}: PersonProps ){
      this.name = name;
      this.gender = gender;
      this.birthDate = birthDate;
    }
  }

  interface UserProps {
    email    : string;
    role     : string;
  }

  class User { 

    public email: string;
    public role: string;
    public lastAccess: Date;

    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date()
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    workingDirectory       : string,
    lastOpenFolder         : string,
  }

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;
    constructor({ 
      workingDirectory,
      lastOpenFolder,
    } : SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  interface UserSettingsProps {
    workingDirectory       : string,
    lastOpenFolder         : string,
    email                  : string,
    role                   : string,
    name                   : string,
    gender                 : Gender,
    birthDate              : Date
  }

  class UserSettings {
    public person: Person;
    public user: User;
    public setting: Settings;

    constructor({
      name, gender, birthDate,
      email,role,
      lastOpenFolder, workingDirectory,
    }: UserSettingsProps){
      this.person = new Person({ name, gender, birthDate});
      this.user = new User({ email, role});
      this.setting = new Settings({ lastOpenFolder, workingDirectory});
    }
    
  }

  const userSettings = new UserSettings({
    birthDate: new Date('1985-10-21'),
    email: 'alexismena2690@google.com',
    gender: 'M',
    lastOpenFolder: '/home',
    name: 'Alexis',
    role: 'Admin',
    workingDirectory: '/usr/home',
});

console.log({ userSettings });

})()