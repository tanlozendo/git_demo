//Objects an Arrays

let customer={
    firstName: 'John',
    lastName: 'Smith',
    cars: ["Volvo","Toyota","Honda"]
}

customer['firstName'] = "Mike"
customer.lastName = "Miller"

console.log(customer['firstName'])
console.log(customer['lastName'])

console.log(`${customer['firstName']} ${customer.lastName}`)


let car = ["Volvo","Toyota","Honda"];
car[1] = "BMW"
console.log(customer.cars[1])