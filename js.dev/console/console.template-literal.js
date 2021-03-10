console.log(`This is a string: ${"string"}`);
console.log(`This is a number: ${42}`);
console.log(`This is an object: ${{ object: "object" }}`);

console.log("This is a string: %s. This is a number: %i", "string", 42);
console.log(`This is a string: ${"string"}. This is a number: ${42}`);

console.log(`This is a number: ${42}. This is an object: %o`, {
  object: "object"
});
