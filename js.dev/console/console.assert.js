let value = 10;

console.assert(value <= 7, "The value is greater than 7.");

function function_one() {
  function_two();
}

function function_two() {
  function_three();
}

function function_three() {
  console.assert(value < 7, "This was false.");
}

function_one();
