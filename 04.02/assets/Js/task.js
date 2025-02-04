//  1. Create a Simple Object Create an object car with properties make, model, and year. Assign values to these properties and log the object. 


const car ={
    make: "Renault",
    model: "Duster",
    year: 2010
}

console.log(car);

//2. Access Object Properties Given the object user = { name: "Alice", age: 25, city: "New York" }, access and log each property individually. 

const user={
    "name": "Alice",
    "age": 25, 
    "city": "New York"
}

console.log(user["name"]);
console.log(user["age"]);
console.log(user["city"]);


//3. Modify Object Properties Start with the object book = { title: "1984", author: "George Orwell" }. Add a year property and update the author property.

const book={
    title: "1984",
    author: "george orwell"
}

book.year=1995;

console.log(book);

//4. Add Methods to Objects Create an object person with properties firstName and lastName. Add a method fullName that returns the full name of the person.

const person={
    firstname: "Nivetha",
    lastname: "Jeni",
    fullname: function(){
        return this.firstname + " " + this.lastname;
    }
}

console.log(person.fullname());

