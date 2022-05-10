console.log();
// ? -- Craig Burke - Coin Flipping
//

// function to randomly flip a coin
function tossCoin() {
  return Math.random() > 0.5 ? "heads" : "tails";
}

// async function to flip a coin 5 times trying to get 5 heads in a row
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

// this is the main funcition that runs and calls the async function setting up a promise and handling the result or rejection
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

// calling the function and printing the result or rejection
fiveHeads()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
console.log("When does this run now? - doing other stuff..."); // shows that the async function is running in the background

console.log("Can do other things while the async function is running..."); // shows that the async function is running in the background
console.log("end of file");
console.log();
