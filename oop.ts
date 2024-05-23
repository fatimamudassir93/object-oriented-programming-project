#! /usr/bin/env node
import inquirer from "inquirer"

class Student {
    name: string;
    constructor(n: string) {
        this.name = n;
    }
}

class Person {
    students: Student[] = [];
    addStudent(obj: Student) {
        this.students.push(obj);
    }
}

const persons = new Person();
const programStart = async (persons: Person) => {
    while (true) {
        console.log("welcome!!");
        const ans = await inquirer.prompt({
            name: "Select",
            type: "list",
            message: "whom you would like to interact with?",
            choices: ["management", "staff", "student", "exit"]
        });


    if (ans.Select == "management") {
        console.log("you select management options. Please interact if you have any complaints");
    } else if (ans.Select == "staff") {
        console.log("you have approached a staff, please feel free to ask if you have any queries");
    } else if (ans.Select == "student") {
        const ans = await inquirer.prompt({
            name: "student",
            type: "input",
            message: "type the name of the student you want to interact with"
        });
        const student = persons.students.find(val => val.name == ans.student);

        if (!student) {
            const name = new Student(ans.student);
            persons.addStudent(name);
            console.log(`Hello, I am ${name.name}, Nice to meet you!`);
            console.log("New student added");
            console.log("current student list");
            console.log(persons.students);
        } else {
            console.log(`Hello, I am ${student.name}, Nice to see you again!`);
            console.log("Existing student list");
            console.log(persons.students);
        }
    } else if (ans.Select == "exit") {
        console.log("Exiting the program");
        process.exit();
    }
}
};


programStart(persons);
