console.log();
// ? -- Craig Burke - Coin Flipping --
//

// randomly returns "heads" or "tails"
function tossCoin() {
  return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeadsAsync() {
  let headsCount = 0;
  let attempts = 0;
  while (headsCount < 5) {
    attempts++;
    if (attempts === 100) {
      return "rejected";
    }
    let result = tossCoin();
    console.log(`${result} was flipped`);
    if (result === "heads") {
      headsCount++;
    } else {
      headsCount = 0;
    }
  }
  return `${attempts}`;
}

function fiveHeads() {
  console.log("flipping coin...");
  return new Promise((resolve, reject) => {
    // your code here!
    let result = fiveHeadsAsync();
    if (result === "rejected") {
      reject("rejected - Could not flip 5 heads in a row in 100 attempts");
    } else {
      resolve(`It took ${result} tries to flip five "heads" in a row`);
    }
  });
}

//

fiveHeads()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
console.log("When does this run now? - doing other stuff...");

console.log();
console.log("end of file");
console.log();
