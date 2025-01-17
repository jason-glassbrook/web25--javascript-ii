// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/

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

function testProblem (testFn , testArgs , talkFn) {
  return ({
    testFn   : testFn ,
    testArgs : testArgs ,
    talkFn   : talkFn ,
    result   : testFn (...testArgs , talkFn)
  });
}

const repeatAfterMe = (val) => (`You gave me:\n${val}`);

let n = 0;
const test = [];

///#####################################
/// CHALLENGE 1
///#####################################

nextProblem ("CHALLENGE");

function getLength (arr , cb) {
  // getLength passes the length of the array into the callback.
  return cb (arr.length);
}

test[n] = testProblem (getLength , [items] , repeatAfterMe);
console.log (test[n].result);

///#####################################
/// CHALLENGE 2
///#####################################

nextProblem ("CHALLENGE");

function last (arr , cb) {
  // last passes the last item of the array into the callback.
  return cb (arr[arr.length - 1]) ;
}

test[n] = testProblem (last , [items] , repeatAfterMe);
console.log (test[n].result);

///#####################################
/// CHALLENGE 3
///#####################################

nextProblem ("CHALLENGE");

function sumNums (x , y , cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb (x + y);
}

test[n] = testProblem (sumNums , [23 , 76] , repeatAfterMe);
console.log (test[n].result);

///#####################################
/// CHALLENGE 4
///#####################################

nextProblem ("CHALLENGE");

function multiplyNums (x , y , cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb (x * y);
}

test[n] = testProblem (multiplyNums , [23 , 76] , repeatAfterMe);
console.log (test[n].result);

///#####################################
/// CHALLENGE 5
///#####################################

nextProblem ("CHALLENGE");

function contains (item , list , cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb (list.includes (item));
}

test[n] = testProblem (contains , ["Gum" , items] , repeatAfterMe);
console.log (test[n].result);

///#####################################
/// STRETCH -> CHALLENGE 6
///#####################################

nextProblem ("(STRETCH) CHALLENGE");

function removeDuplicates (array , cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  return cb (onlyUniqueSet (array));
}

const isUnique =
  (elem , index , array) => (array.indexOf (elem) === index);
const onlyUniqueSet =
  (array) => (array.filter (isUnique));

test[n] = testProblem (removeDuplicates , [items.concat(items)] , repeatAfterMe);
console.log (test[n].result);
