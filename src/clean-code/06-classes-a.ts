(() => {

  type Gender ='M'|'F'

  class Person {
    // public name: string;
    // public gender: Gender;
    // public birthdate: Date
    
    // constructor(name: string, gender: Gender, birthdate: Date){
    //   this.name = name;
    //   this.gender = gender;
    //   this.birthdate = birthdate;
    // }
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ){}
  }

  const newPerson = new Person('Alexis', 'M', new Date('1995-10-02'))
  console.log(newPerson)
})()