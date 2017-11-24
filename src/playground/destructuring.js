console.log("destructuring!!");

const person = {
    name: "Andrew",
    age: 26,
    location: {
        city: "Philadelphia",
        temp: 24
    }
}

const { name = "Anonymus", age } = person;
// const name = person.name;
// const age = person.age;
console.log(`${name} is ${age}`);

const { temp: temperature, city } = person.location;

if (city && temperature) {
    console.log(`It is ${temperature} in ${city}`);
}

const book = {
    title: "Ego is the enemy",
    uthor: "Ryen Holiday",
    publisher: {
        name: "Penguin",
    }
}

const { name: publisherName = "self-published" } = book.publisher;

console.log(publisherName); //penguin, self-published



//
// u.e tömbökkel
//

const address = ["1299 S Juniper Street", "Philadelphia", "Pennsylvania", "19147"];

const [, city1, state = "New York"] = address;

console.log(`You are in ${city1} ${state}`);

const item = ["coffee (hot)", "$ 2.00", "2.50", "2.75"]
const [coffee, , cost] = item;

console.log(`A medoium ${coffee} costs ${cost} `);