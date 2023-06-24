function getMazePaths(sr, sc, dr, dc, path = "") {
  if (sr === dr && sc === dr) {
    console.log(path);
    return;
  }
  if (sr > dr || sc > dc) return [];

  const path_rows = getMazePaths(sr + 1, sc, dr, dc, path + "h");
  const path_columns = getMazePaths(sr, sc + 1, dr, dc, path + "v");
}

console.log(getMazePaths(1, 1, 3, 3));
