let hw = "https://swapi.dev/api/planets/14/";

// let text = "How are you doing today?";
// const myArray = hw.split("/");
// console.log(myArray);
// let idx = myArray[myArray.length - 2];
// let cat = myArray[myArray.length - 3];

// console.log(idx, cat);

const planetConverter = (string) => {
  const myArray = string.split("/");
  let idx = myArray[myArray.length - 2];
  let cat = myArray[myArray.length - 3];
  return [idx, cat];
};

console.log(planetConverter(hw));
let hwConv = planetConverter(hw);
console.log(hwConv[0], hwConv[1]);
console.log(planetConverter("https://swapi.dev/api/people/1/"));
let hwConv2 = planetConverter("https://swapi.dev/api/people/1/");
console.log(hwConv2[0], hwConv2[1]);

// I need to call 2 apis and use data from the first one to call the second one.
async function getPlanet(url) {
  const response = await fetch(url)
    // fetching the first api
    .then((response) => response.json()) // converting the response to json
    .then((data) => {
      let hwConv = planetConverter(data.url);
      console.log(hwConv[0], hwConv[1]);
      let newCallData = `https://swapi.dev/api/${hwConv[1]}/${hwConv[0]}`; // fetching the second api
      // using the data from the first api
      console.log(newCallData); // printing the data from the first api
      fetch(newCallData.homeworld) // fetching the second
        .then((response) => response.json()) // converting the response to json
        .then((data) => {
          // using the data from the second api
          console.log(data); // printing the data from the second api
        });
    });
}
getPlanet(hw);

// async function funcName(url) {
//   const response = await fetch(url);
//   var data = await response.json();
// }

// api url
const api_url = "https://swapi.dev/api/people/1/";

// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  console.log(data);
}
// Calling that async function
getapi(api_url);
