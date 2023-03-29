let x = (function() {
  let counter = 0;
  return function() {
    counter += 1;
    return counter;
  };
})();

let y = (function() {
  for (let i = 0; i < 10; i++) {
    x();
    if (i == 8) {
      return x();
    }
  }
})();

console.log(y);
