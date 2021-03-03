// Outermost scope
var num = 19;
function greet() {
  return "Hello!";
}

window.hasOwnProperty("num"); // => true
window.hasOwnProperty("greet"); // => true

// Outermost scope
const pi = 3.14;
let message = "Hi!";
class MyClass {}

window.hasOwnProperty("pi"); // => false
window.hasOwnProperty("message"); // => false
window.hasOwnProperty("MyClass"); // => false
