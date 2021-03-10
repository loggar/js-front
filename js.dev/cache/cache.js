let cache = new WeakMap();
// compute and remember the result
function compute(obj) {
  if (!cache.has(obj)) {
    let result = obj.name + " is " + obj.age + " years old.";
    cache.set(obj, result);
    return [result, "computed"];
  }
  return [cache.get(obj), "cached"];
}
