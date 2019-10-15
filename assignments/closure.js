///#####################################
/// TOOLS
///#####################################

function heading (content) {
  console.log (`\n### ${content} ###\n`);
}

function nextProblem (content) {
  n += 1;
  heading (`${content} ${n}`);
  test[n] = {};
}

let n = 0;

///#####################################
/// CHALLENGE 1
///-------------------------------------
/// Write your own closure
///#####################################

nextProblem ("CHALLENGE");

// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

// I actually already did this with `nextProblem()` above, but I'll do another one...
let value = 55 ;
console.log (`\`value\` BEFORE \`myClosure()\` is called:\n${value}`);

const myClosure = function (x , fn) {
  value = fn (value , x);
  console.log ("\nI did something to the value!\n");
};

myClosure (14 , (a , b) => (a / b));
console.log (`\`value\` AFTER \`myClosure()\` is called:\n${value}`);

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


///#####################################
/// CHALLENGE 2
///-------------------------------------
/// Implement a "counter maker" function
///#####################################

nextProblem ("(STRETCH) CHALLENGE");

const counterMaker = () => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.
};
// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2

///#####################################
/// CHALLENGE 3
///-------------------------------------
/// Make `counterMaker` more sophisticated
///#####################################

nextProblem ("(STRETCH) CHALLENGE");

// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

///#####################################
/// CHALLENGE 4
///-------------------------------------
/// Create a counter function with an object that can increment and decrement
///#####################################

nextProblem ("(STRETCH) CHALLENGE");

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
