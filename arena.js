// ----------PART II: The Arena ---------------
function Arena(name) {
    this.name = name.charAt(0).toUpperCase() + name.slice(1);
    return(this.name);   
};

var colosseum = new Arena("Colosseum");
console.log(colosseum.name);

var colosseum = new Arena("megalopolis")
console.log(colosseum.name);
