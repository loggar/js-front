let basicArray = ["one", "two", "three"];
console.table(basicArray);

let basicObject = {
  one: "one",
  two: "two",
  three: "three"
};
console.table(basicObject);

let arrayOfObjects = [
  {
    one: "one",
    two: "two",
    three: "three"
  },
  {
    one: "one",
    two: "two",
    three: "three"
  },
  {
    one: "one",
    two: "two",
    three: "three"
  }
];
console.table(arrayOfObjects);

let arrayOfArraysWithObject = [
  ["one", "two", { three: "three", four: "four" }],
  ["one", "two", { three: "three", four: "four" }],
  ["one", "two", { three: "three", four: "four" }]
];

console.table(arrayOfArraysWithObject);
