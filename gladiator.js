
// -----------PART I: THE GLADIATOR ---------
function Gladiator(name, weapon) {
    this.name = name;
    this.weapon = weapon;
    //'Trident', 'Spear', 'Club', 'Sword';
        // Can only use one of the four weapons
        // this.addWeapon.push(weapon);
        // if (this.weapon === 'Trident' || this.weapon === 'Spear' || this.weapon === 'Club' || this.weapon) { 
        //     this.weapons.pop(weapon);
        // } else {
        //     console.log(error);
        // }
};

var max = new Gladiator("Maximus", "Spear");
console.log(max.name);
console.log(max.weapon);

var jesse = new Gladiator("Jesse", "taco");
console.log(jesse.name);
console.log(jesse.weapon);

