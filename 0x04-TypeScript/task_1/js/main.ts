// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Directors interface that EXTENDS Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstname, lastname) => {
  return `${firstname.charAt(0)}. ${lastname}`;
};

console.log(printTeacher("John", "Doe"));

interface StudentClassConstructor  {
  new (firstName: string, lastname: string): StudentClassConstructor;
}
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  private firstanme: string;
  private lastname: string;

  constructor(firstname: string, lastname: string) {
    this.firstanme;
    this.lastname;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstname; 
  }
}