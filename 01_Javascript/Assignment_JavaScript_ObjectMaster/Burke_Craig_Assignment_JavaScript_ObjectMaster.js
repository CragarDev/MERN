console.log();
console.log("********************************************************");
console.log();
// ? -- Craig Burke - Assignment: JavaScript Object Master
//
/* 
Object Master (Optional)

Lets use our new map and filter superpowers to 
get some data from this immutable pokémon array.

For example we could create a list of pokémon that have names that 
start with the letter "B" by using the following code.

  ? const bListPkmn = pokémon.filter( p => p.name[0] === "B" );

Or if we wanted to return an array of just the ids, 
we could use something like this.
  ? const pkmnIds = pokémon.map( p => p.id )



// an array of pokémon objects where the id is evenly divisible by 3

// an array of pokémon objects that are "fire" type

// an array of pokémon objects that have more than one type

// an array with just the names of the pokémon

// an array with just the names of pokémon with an id greater than 99

// an array with just the names of the pokémon whose only type is poison

// an array containing just the first type of all the pokémon whose second type is "flying"

// a count of the number of pokémon that are "normal" type

*/

const pokémon = Object.freeze([
  { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
  { id: 5, name: "Charmeleon", types: ["fire"] },
  { id: 9, name: "Blastoise", types: ["water"] },
  { id: 12, name: "Butterfree", types: ["bug", "flying"] },
  { id: 16, name: "Pidgey", types: ["normal", "flying"] },
  { id: 23, name: "Ekans", types: ["poison"] },
  { id: 24, name: "Arbok", types: ["poison"] },
  { id: 25, name: "Pikachu", types: ["electric"] },
  { id: 37, name: "Vulpix", types: ["fire"] },
  { id: 52, name: "Meowth", types: ["normal"] },
  { id: 63, name: "Abra", types: ["psychic"] },
  { id: 67, name: "Machamp", types: ["fighting"] },
  { id: 72, name: "Tentacool", types: ["water", "poison"] },
  { id: 74, name: "Geodude", types: ["rock", "ground"] },
  { id: 87, name: "Dewgong", types: ["water", "ice"] },
  { id: 98, name: "Krabby", types: ["water"] },
  { id: 115, name: "Kangaskhan", types: ["normal"] },
  { id: 122, name: "Mr. Mime", types: ["psychic"] },
  { id: 133, name: "Eevee", types: ["normal"] },
  { id: 144, name: "Articuno", types: ["ice", "flying"] },
  { id: 145, name: "Zapdos", types: ["electric", "flying"] },
  { id: 146, name: "Moltres", types: ["fire", "flying"] },
  { id: 148, name: "Dragonair", types: ["dragon"] }
]);

console.log();
console.log("********************************************************");
console.log();

// an array of pokémon objects where the id is evenly divisible by 3
const idDivisibleBy3 = pokémon.filter((p) => p.id % 3 === 0);
console.log("Pokémon with id divisible by 3: ", idDivisibleBy3);

console.log();
console.log("********************************************************");
console.log();

// an array of pokémon objects that are "fire" type
const fireType = pokémon.filter((p) => p.types.includes("fire"));
console.log("Fire type Pokémon: ", fireType);

console.log();
console.log("********************************************************");
console.log();

// an array of pokémon objects that have more than one type
const moreThanOneType = pokémon.filter((p) => p.types.length > 1);
console.log("Pokémon with more than one type: ", moreThanOneType);

console.log();
console.log("********************************************************");
console.log();

// an array with just the names of the pokémon
const pokémonNames = pokémon.map((p) => p.name);
console.log("Names of all Pokémon: ", pokémonNames);

console.log();
console.log("********************************************************");
console.log();

// an array with just the names of pokémon with an id greater than 99
const idGreaterThan99 = pokémon.filter((p) => p.id > 99).map((p) => p.name);
console.log("Pokémon names with id greater than 99: ", idGreaterThan99);

console.log();
console.log("********************************************************");
console.log();

// an array with just the names of the pokémon whose only type is poison
const poisonType = pokémon.filter((p) => p.types.includes("poison")).map((p) => p.name);
console.log("Pokémon names with poison type: ", poisonType);

console.log();
console.log("********************************************************");
console.log();

// an array containing just the first type of all the pokémon whose second type is "flying"
const firstType = pokémon.filter((p) => p.types.includes("flying")).map((p) => p.types[0]);
console.log("First type of all Pokémon with flying as a second type: ", firstType);

console.log();
console.log("********************************************************");
console.log();

// a count of the number of pokémon that are "normal" type
const normalType = pokémon.filter((p) => p.types.includes("normal")).length;
console.log("Number of Pokémon with normal type: ", normalType);

console.log();
console.log("********************************************************");
console.log();
