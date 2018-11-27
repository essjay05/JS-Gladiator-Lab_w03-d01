// ----------PART II: The Arena ---------------
function Arena(name, gladiators) {
    this.name = name.charAt(0).toUpperCase() + name.slice(1);
    this.gladiators = [];

};

var colosseum = new Arena("Colosseum");
console.log(colosseum.name);

var colosseum = new Arena("megalopolis")
console.log(colosseum.name);


// ----- AN ARENA CAN HAVE GLADIATORS
var colosseum = new Arena("Colosseum");
console.log(colosseum.gladiators);

// ------- YOU CAN ADD A GLADIATOR TO THE ARENA
var max = new Gladiator("Maximus", "Trident");
var colosseum = new Arena("Colosseum");
colosseum.addGladiator(max);
console.log(colosseum.gladiators);
    

