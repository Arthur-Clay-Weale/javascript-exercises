const people = [
    {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
    },
    {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
    },
{
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
    },
]

let oldestPersonObject = null
let nameOfPerson = ''
let recentOldestPerson = 0

const findTheOldest = function(people) {

    for(person of people){
        nameOfPerson = person.name;
        dateOfBirth = person.yearOfBirth;
        dateOfDeath = person.yearOfDeath;

        let currentOldestPerson = dateOfDeath - dateOfBirth;
            console.log(nameOfPerson);
            console.log(recentOldestPerson);
            console.log(currentOldestPerson);

        if(currentOldestPerson > recentOldestPerson){
            recentOldestPerson = currentOldestPerson;
            //console.log(currentOldestPerson);
    }
}
    //console.log(`The oldest is : ${recentOldestPerson}`)
    }
findTheOldest(people);
console.log();
// Do not edit below this line
//module.exports = findTheOldest;
