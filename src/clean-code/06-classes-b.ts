(() => {

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
    birthDate: Date;
    email    : string;
    gender   : Gender;
    name     : string;
    role     : string;
  }

  class User extends Person { 

    public email: string;
    public role: string;
    public lastAccess: Date;

    constructor({ email, role, name, gender, birthDate }: UserProps) {
      super( { name, gender, birthDate } );
      this.lastAccess = new Date()
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
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

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;
    constructor({ 
      workingDirectory,
      lastOpenFolder,
      email,
      role,
      name,
      gender,
      birthDate
    } : UserSettingsProps) {
      super({email, role, name, gender, birthDate});
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const userSettings = new UserSettings({
    birthDate: new Date('1985-10-21'),
    email: 'fernando@google.com',
    gender: 'M',
    lastOpenFolder: '/home',
    name: 'Fernando',
    role: 'Admin',
    workingDirectory: '/usr/home',
});

console.log({ userSettings });

})()