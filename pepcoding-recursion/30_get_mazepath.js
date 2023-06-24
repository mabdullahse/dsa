function getMazePaths(sr, sc, dr, dc) {
  if (sr === dr && sc === dr) return [""];
  if (sr > dr || sc > dc) return [];

  const path_rows = getMazePaths(sr + 1, sc, dr, dc);
  const path_columns = getMazePaths(sr, sc + 1, dr, dc);

  let path = [];

  for (const item of path_rows) {
    path.push(item + "v");
  }
  for (const item of path_columns) {
    path.push(item + "h");
  }
  return path;
}

console.log(getMazePaths(1, 1, 3, 3));
