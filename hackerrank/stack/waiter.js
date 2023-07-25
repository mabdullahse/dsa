function isPrimeFun(counter) {
  let isPrime = true;
  let till = Math.floor(Math.sqrt(counter));
  for (let j = 2; j <= till; j++) {
    if (counter % j === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
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
  let ans = [];
  for (let i = 2; i <= num; i++) {
    if (primeNumbers[i]) {
      ans.push(i);
    }
  }
  return ans;
}

function waiter(number, q) {
  // Write your code here

  let max = Math.max(...number);
  let primeNumber = steveOfEthernces(max);
  let ans = [];

  let blist = [];
  let alist = [...number];
  for (let iteration = 0; iteration < q; iteration++) {
    let tempAList = [];
    blist = [];
    for (let i = alist.length - 1; i >= 0; i--) {
      if (alist[i] % primeNumber[iteration] === 0) {
        blist.push(alist[i]);
      } else {
        tempAList.push(alist[i]);
      }
    }
    alist = [...tempAList];
    blist.reverse();
    ans.push(...blist);
  }
  alist.reverse();
  ans.push(...alist);

  return ans;
}

// const list = [3, 4, 7, 6, 5]; //[2, 3, 4, 5, 6, 7];
const list = [2, 3, 4, 5, 6, 7];
console.log(waiter(list, 1));
// console.log(sieveofEratosthenes(13));
