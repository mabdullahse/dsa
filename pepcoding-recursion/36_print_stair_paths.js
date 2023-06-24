function print_stair(stair_no, paths) {
  if (stair_no === 0) {
    console.log(paths);
    return;
  } else if (stair_no < 0) {
    return;
  }
  //   console.log("==>", paths);
  const path1 = print_stair(stair_no - 1, paths + "1");
  const path2 = print_stair(stair_no - 2, paths + "2");
  const path3 = print_stair(stair_no - 3, paths + "3");
}

console.log(print_stair(4, []));
