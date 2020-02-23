console.group();
console.log("one");
console.log("two");
console.log("three");
console.groupEnd();

console.group("this is a label");
console.log("one");
console.log("two");
console.log("three");
console.groupEnd();

console.group("outer group");
console.log("outer one");
console.log("outer two");
console.group("inner group");
console.log("inner one");
console.log("inner two");
console.log("inner three");
console.groupEnd();
console.log("outer three");
console.groupEnd();

console.group("%cstyled group", "font-size: 20px; color: red;");
console.log("one");
console.log("two");
console.log("three");
console.groupEnd();
