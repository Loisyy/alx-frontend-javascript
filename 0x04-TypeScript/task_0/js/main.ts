// 1. Create the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two student objects
const student1: Student = {
  firstName: "Lois",
  lastName: "Nkeiru",
  age: 23,
  location: "Lagos",
};

const student2: Student = {
  firstName: "David",
  lastName: "Mark",
  age: 25,
  location: "Abuja",
};

// 3. Create students list array
const studentsList: Student[] = [student1, student2];

// 4. Render a table using Vanilla JavaScript
const table = document.createElement("table");
const tableBody = document.createElement("tbody");

// Loop through the studentsList and add each row
studentsList.forEach((student: Student): void => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

// Append table to the DOM
table.appendChild(tableBody);
document.body.appendChild(table);
