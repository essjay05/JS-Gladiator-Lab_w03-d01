// ----------PART II: The Arena ---------------
function Arena(name) {
    this.name = name;
    // ---- Function to Capitalize Name ---
    const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
    console.log(nameCapitalized);   
};

var colosseum = new Arena("Colosseum");
console.log(colosseum.name);

var colosseum = new Arena("megalopolis");
console.log(colosseum.name);