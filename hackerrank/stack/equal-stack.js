function equalStacks(h1, h2, h3) {
  // Write your code here

  let rsh1 = h1.reduce((itr, ac) => itr + ac, 0);
  let rsh2 = h2.reduce((itr, ac) => itr + ac, 0);
  let rsh3 = h3.reduce((itr, ac) => itr + ac, 0);

  let min = Math.min(rsh1, rsh2, rsh3);

  while (true) {
    if (rsh1 > min) {
      rsh1 = rsh1 - h1.shift();
    } else if (rsh2 > min) {
      rsh2 = rsh2 - h2.shift();
    } else if (rsh3 > min) {
      rsh3 = rsh3 - h3.shift();
    }

    if (rsh1 === rsh2 && rsh2 === rsh3) {
      return rsh2;
    }

    min = Math.min(rsh1, rsh2, rsh3);
  }
}
