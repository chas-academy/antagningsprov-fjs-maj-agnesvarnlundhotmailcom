

function uppg8(){

let listOfPersons = [
    {name: "Agnes", age: 31},
    {name: "Jonna", age: 27},
    {name: "Anna", age: 31},
    {name: "Elin", age: 34},
    {name: "Rebecca", age: 28},
]

for (person of listOfPersons){
    if (person.age > 30){
        console.log(person.name)
    }
}

}

uppg8()

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument


module.exports = { uppg8 };