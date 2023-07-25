// Prime number is +ive number which is divisible by exactly two number

// 1. one by 1
// 2. itself

function isPrimeFun(counter) {
  isPrime = true;
  let till = Math.floor(Math.sqrt(counter));
  for (let j = 2; j <= till; j++) {
    if (counter % j === 0) {
      isPrime = false;
      break;
    }
  }
  isPrime ? console.log("yes") : console.log("no");
}
function steveOfEthernces(num) {
  let primeNumbers = new Array(num + 1).fill(true);

  primeNumbers[0] = false;
  primeNumbers[1] = false;

  let sqrtLimit = Math.sqrt(num);
  for (let i = 2; i <= sqrtLimit; i++) {
    if (primeNumbers[i]) {
      for (let j = i * i; j <= num; j += i) {
        primeNumbers[j] = false;
      }
    }
  }
  for (let i = 2; i <= num; i++) {
    if (primeNumbers[i]) {
      console.log(i);
    }
  }
}
