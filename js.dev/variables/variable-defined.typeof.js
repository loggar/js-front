console.log(typeof missingVar);

console.log(typeof missingVar, typeof missingVar !== "undefined");

(function () {
  let missingVar;
  console.log(missingVar, typeof missingVar, typeof missingVar !== "undefined");
  missingVar = 1;
  console.log(missingVar, typeof missingVar, typeof missingVar !== "undefined");
})();
