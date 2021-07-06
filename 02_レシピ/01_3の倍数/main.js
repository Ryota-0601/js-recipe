/*
const genkiFunction = function(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0) {
      console.log(`${i}!!!!!!`)
    } else {
      console.log(i)
    }
  }
}
genkiFunction(100)

console.log("発展1")
const fizzbuzz = function(number) {
  for (let i = 0; i <= number; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz")
    } else if (i % 5 === 0) {
      console.log("Buzz")
    } else if (i % 3 === 0) {
      console.log("Fizz")
    } else {
      console.log(i)
    }
  }
}

fizzbuzz(100)
*/
/*
const genkiFunction2 = function(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 || String(i).includes("3")) {
      console.log(`${i}!!!!!!`)
    } else {
      console.log(i)
    }
  }
}
​
genkiFunction2(100)
*/

//発展3
let count = 1

const countup = function() {
  if (count % 3 === 0) {
    console.log(count + "!!!!")
  } else {
    console.log(count)
  }
  count += 1
}

setInterval(countup, 1000)
