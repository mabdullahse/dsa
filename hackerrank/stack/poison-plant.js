function findDaysV0(plants) {
  let isUpdatePerformaed = true;
  let days = 0;

  while (isUpdatePerformaed) {
    let store = [];
    isUpdatePerformaed = false;
    for (let i = 0; i < plants.length; i++) {
      if (plants[i - 1] && plants[i] > plants[i - 1]) {
        isUpdatePerformaed = true;
      } else {
        store.push(plants[i]);
      }
    }
    console.log("---------------");
    console.log(store);
    plants = [...store];
    if (isUpdatePerformaed) days++;
  }
  return days;
}

function findDays(plants) {
  let days = 0;

  while (true) {
    let store = [plants[0]];
    for (let i = 1; i < plants.length; i++) {
      if (plants[i] <= plants[i - 1]) {
        store.push(plants[i]);
      }
    }
    console.log("---------------");
    console.log(store);

    if (store.length !== plants.length) {
      days++;
      plants = [...store];
    } else {
      break;
    }
  }
  return days;
}

function processData(plants) {
  //Solution
  var maxDaysAlive = 0;
  var stack = [];
  // We keep in the stack the possible
  // killers for plants that we haven't seen yet.

  for (var i = 0; i < plants.length; i++) {
    var daysAlive = 0;
    // Number of days the plant[i] will survive

    while (stack.length > 0 && plants[i] <= stack[stack.length - 1].plant)
      daysAlive = Math.max(daysAlive, stack.pop().days);

    // when plant[i] is the minimum seen until now.
    // It will never die.
    if (stack.length === 0) daysAlive = 0;
    // plant[i] will die, because it exited the while
    // loop and a lower plant was found
    else daysAlive += 1;

    maxDaysAlive = Math.max(maxDaysAlive, daysAlive);

    // plant[i] is a possible killer because there
    // may be plants greater than this that we have
    // not seen yet
    stack.push({
      plant: plants[i],
      days: daysAlive,
    });
    console.log(stack);
  }
  return maxDaysAlive;
}

var plants = [4, 3, 7, 8, 6, 5, 6, 4, 7, 4];
// var plants = [4, 3, 5, 4, 2]; || 7, 6
// var plants = [4, 3, 4, 2]; || 5
// var plants = [4, 3, 2]; || 4

// var plants = [6, 5, 8, 4, 7, 10, 9];
// var plants = [6, 5, 4, 9]; // 8,9,10
// var plants = [6, 5, 4]; // 9

// [2, 4, 6, 7, 2, 3]
// [2, 4, 6, 7]
console.log(processData(plants));
// console.log(processData([44, 40, 55, 66, 30, 33, 35, 200, 1, 2, 3, 4]));
