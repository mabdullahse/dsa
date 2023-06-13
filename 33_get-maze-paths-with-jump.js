function getPaths(sr, sc, dr, dc) {
  if (sr === dr && sc === dc) return [""];

  let paths = [];

  // vertical move
  for (let mv = 1; mv <= dr - sr; mv++) {
    pathsV = getPaths(sr + mv, sc, dr, dc);
    for (const pathv of pathsV) {
      paths.push("v" + mv + pathv);
    }
  }

  // horizontal move
  var hpaths = [];
  for (let mv = 1; mv <= dc - sc; mv++) {
    hpaths = getPaths(sr, sc + mv, dr, dc);
    for (const pathh of hpaths) {
      paths.push("h" + mv + pathh);
    }
  }

  // Diagonal move
  var dpaths = [];
  for (let mv = 1; mv <= dc - sc && mv <= dr - sr; mv++) {
    dpaths = getPaths(sr + mv, sc + mv, dr, dc);
    for (const pathh of dpaths) {
      paths.push("d" + mv + pathh);
    }
  }

  return paths;
}

console.log(getPaths(1, 1, 4, 4));
