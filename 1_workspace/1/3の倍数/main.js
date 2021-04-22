const fizbuzz1 = function(number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log("fizz")
    } else if (n % 5 === 0) {
      console.log("buzz")
    }
  }
}
fizbuzz1(24)
