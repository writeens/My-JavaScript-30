const dogs = [{ name: "Snickers", age: 2 }, { name: "hugo", age: 8 }];

function makeGreen() {
    const p = document.querySelector("p");
    p.style.color = "#BADA55";
    p.style.fontSize = "50px";
}

// Regular
console.log("hello");

// Interpolated
console.log("Hello, I am %s years old", "30");

// or
console.log(`Hello, I am ${51} years old in dog years`);

// Styled
console.log("%c I am text", "font-size:20px; text-shadow: 5px 5px 0 blue");

// warning!
console.warn("Noooooooooo!!!!");

// Error :|
console.error("Shit!!!!!!!!!!");

// Info
console.info("Boys like girls just as much as girls like boys");

// Testing
// assert would only run if the assertion is false, nothing happens when the
// assertion is true
console.assert(3 === 2, "This is wrong");

// clearing
// console.clear();

// Viewing DOM Elements
const p = document.querySelector("p");
console.log(p);

// Grouping together
console.clear();
// counting
console.count();
// timing
console.time("fetch data");
fetch("https://api.github.com/users/wesbos")
    .then(data => data.json())
    .then((data) => {
        console.timeEnd("fetch data");
        console.log(data);
    });
console.clear();
console.table(dogs);
