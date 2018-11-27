
// -----------PART I: THE GLADIATOR ---------
function Gladiator(name, weapon) {
    this.name = name;
    this.weapon = ['Trident', 'Spear', 'Club'];
};

var max = new Gladiator("Maximus", "Spear");
console.log(max.name);
console.log(max.weapon);

var jesse = new Gladiator("Jesse", "taco");
console.log(jesse.name);
console.log(jesse.weapon);

