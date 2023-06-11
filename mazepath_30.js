function getMazePaths(sr, sc, dr, dc) {
  if (sr === dr && sc === dr) return [dr, dc];
  if (sr === dr || sc === dr) return [];

  const firstPaths = getMazePaths(sr + 1, sc, dr, dc);
  getMazePaths(sr, sc + 1, dr, dc);

  let path = [];
  path.push([sr + 1, sc]);
  path.push([sr, sc + 1]);

  return path;
}

console.log(getMazePaths(1, 1, 3, 3));
