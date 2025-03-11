//examples
import moment from "moment";

const currTime = moment().format("YYY MM DD")
console.log(currTime)

const myName: string = "Ollobergan";
const age: number = 24;

console.log(myName)
console.log(age)

interface Bank {
    name: string,
    started: number,
    branch: number,
    employees: number,
    motto: string[],
    logo: string,
    ravenue: number,
}

const wise: Bank = {
    name: "wise",
    started: 1990,
    branch: 34,
    employees: 1990,
    motto: ['our bank'],
    logo: "https/something",
    ravenue: 1.8
}

console.log(`this bank is ${wise.name}, and it originally started in ${wise.started}. Now it has ${wise.branch}, ${wise.employees}, with ravenue of ${wise.ravenue}M`)


//architectual patters: MVC, DI, frontendga -> MVP

//MVC - MODEL VIEW CONTROLLER

//design paterns: middlewares, decorators 
