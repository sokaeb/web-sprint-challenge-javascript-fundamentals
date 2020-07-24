// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

// The internal variable can be accessed by nestedFunction because it is a closure which has access to the functions outside of it (the parent function). nestedFunction is inside the myFunction function, therefore, it acts as the closure (it's the child).

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(param){
  let total = 0;
  for(let i = 0; i <= param; i++){
    total += i;
   }
   return total;
}
console.log(summation(4));