interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

function createEmployee(salary: number | string): Teacher | Director {
    return typeof salary === 'number' && salary < 500 ? new Teacher() : new Director();
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

// Updated exactly as required
export function isDirector(employee: Teacher | Director): boolean {
    return employee instanceof Director;
}

export function executeWork(employee: Teacher | Director): string {
    return isDirector(employee)
        ? employee.workDirectorTasks()
        : employee.workTeacherTasks();
}

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

type Subjects = 'Math' | 'History';

export function teachClass(todayClass: Subjects): string {
    return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
}

console.log(teachClass('Math'));
console.log(teachClass('History'));
