// ----------PART II: The Arena ---------------
function Arena(name, gladiators) {
    this.name = name.charAt(0).toUpperCase() + name.slice(1);
    this.gladiators = [];
    this.addGladiator = function(gladiator) {
        this.gladiators.push(gladiator);
        if (this.gladiators.length > 2) {
            this.gladiators.pop(gladiator);
        } else {
            console.log(this.gladiators.length);
        }
    }
}

var colosseum = new Arena("Colosseum");
console.log(colosseum.name);

var megalopolis = new Arena("megalopolis")
console.log(megalopolis.name);


// ----- AN ARENA CAN HAVE GLADIATORS
var colosseum = new Arena("Colosseum");
console.log(colosseum.gladiators);

// ------- YOU CAN ADD A GLADIATOR TO THE ARENA
var max = new Gladiator("Maximus", "Trident");
var colosseum = new Arena("Colosseum");
colosseum.addGladiator(max);
console.log(colosseum.gladiators);
    
// ARENA SHOULD NEVER HAVE MORE THAN 2 GLADIATORS AT A TIME
var max = new Gladiator("Maximums", "Trident");
var titus = new Gladiator("Titus", "Sword");
var andronicus = new Gladiator("Andronicus", "Sword");
var colosseum = new Arena("Colosseum");
colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.addGladiator(andronicus);
console.log(colosseum.gladiators);