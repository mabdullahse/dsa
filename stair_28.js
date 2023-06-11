function getStairPaths(stair) {
  if (stair === 0) {
    return [0];
  } else if (stair < 0) {
    return [];
  }

  const path1 = getStairPaths(stair - 1);
  const path2 = getStairPaths(stair - 2);
  const path3 = getStairPaths(stair - 3);
  const paths = [];
  for (let i = 0; i < path1.length; i++) {
    paths.push(path1[i] + "1");
  }
  for (let i = 0; i < path2.length; i++) {
    paths.push(path2[i] + "2");
  }
  for (let i = 0; i < path3.length; i++) {
    paths.push(path3[i] + "3");
  }
  console.log(paths);
  return paths;
}

console.log(getStairPaths(4));
