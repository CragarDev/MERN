console.log();
console.log("********************************************************");
console.log();
// ? -- Craig Burke - Assignment: JavaScript It's Time to Duel
//
/* 
Unit Cards
name	cost	power	resilience
// Red Belt Ninja	3	3	4
// Black Belt Ninja	4	5	4

Effect Cards
name	cost	text	stat	magnitude
// Hard Algorithm	2	increase target's resilience by 3	resilience	+3
// Unhandled Promise Rejection	1	reduce target's resilience by 2	resilience	-2
// Pair Programming	3	increase target's power by 2	power	+2


Play out the following scenario
turn	action
// 1	Make an instance of "Red Belt Ninja"
// 1	Make an instance of "Hard Algorithm" and play it on "Red Belt Ninja"
// 2	Make an instance "Black Belt Ninja"
// 2	Make an instance of "Unhandled Promise Rejection" and play it on "Red Belt Ninja"
// 3	Make an instance of "Pair Programming" and play it on "Red Belt Ninja"
// 3	"Red Belt Ninja" uses the attack method on "Black Belt Ninja"


// Make an instance of Unit called "Red Belt Ninja"

// Make an instance of Unit called "Black Belt Ninja"

// Make an instance of Effect called "Hard Algorithm"

// Make an instance of Effect called "Unhandled Promise Rejection"

// Make an instance of Effect called "Pair Programming"

// Play out the scenario described above

*/

// Classes
class Card {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
}

class Unit extends Card {
  constructor(name, cost, power, res) {
    super(name, cost);
    this.power = power;
    this.resilience = res;
  }

  attack(target) {
    console.log(`${this.name} attacks ${target.name}!`);
    target.res -= this.power;
  }

  unitStats() {
    console.log(`${this.name} has ${this.resilience} resilience and ${this.power} power.`);
  }
}

class Effect extends Card {
  constructor(name, cost, text, stat, mag) {
    super(name, cost);
    this.text = text;
    this.stat = stat;
    this.mag = mag;
  }

  play(target) {
    console.log(`${this.name} is played on ${target.name}!`);
    target[this.stat] += this.mag;
  }
}

// Units
const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

// Effects
const hA = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
const uHPR = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
const pP = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);

console.log();
console.log("******************* Game Playing Actions *************************************");
console.log();

redBeltNinja.unitStats();
console.log("-----------------------------------------------------");
hA.play(redBeltNinja);
redBeltNinja.unitStats();
console.log("-----------------------------------------------------");
blackBeltNinja.unitStats();
console.log("-----------------------------------------------------");
uHPR.play(redBeltNinja);
redBeltNinja.unitStats();
console.log("-----------------------------------------------------");
pP.play(redBeltNinja);
redBeltNinja.unitStats();
console.log("-----------------------------------------------------");
blackBeltNinja.unitStats();
redBeltNinja.attack(blackBeltNinja);
blackBeltNinja.unitStats();
console.log("-----------------------------------------------------");

console.log();
console.log("********************************************************");
console.log();
