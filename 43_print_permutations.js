function print_permutation(str, ans = "") {
  //   console.log(ans);
  if (str === "") {
    console.log(ans);
    return;
  }

  for (let i = 0; i < str.length; i++) {
    print_permutation(
      str.substring(0, i) + str.substring(i + 1),
      ans + str.charAt(i)
    );
  }
}
print_permutation("abc", "");
