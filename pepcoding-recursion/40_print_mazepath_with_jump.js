function getMazePathWithjump(sr, sc, dr, dc, path = "") {
  if (sr === dr && sc === dc) {
    console.log(path);
    return;
  }
  if (sr > dr || sc > dc) {
    return;
  }

  var pathv = getMazePathWithjump(sr + 1, sc, dr, dc, path + "v");
  var pathh = getMazePathWithjump(sr, sc + 1, dr, dc, path + "h");
  var pathd = getMazePathWithjump(sr + 1, sc + 1, dr, dc, path + "h");
}

console.log(getMazePathWithjump(1, 1, 3, 3));
