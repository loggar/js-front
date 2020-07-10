let obj = { name: "John", age: 16 };
let result1 = compute(obj);
let result2 = compute(obj);
console.log(result1);
//["John is 16 years old.", "computed"]
console.log(result2);
//["John is 16 years old.", "cached"]
delete obj;
//Memory is cleared as soon as obj reference is remove
