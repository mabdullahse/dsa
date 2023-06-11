function name(qes, ans) {
  if (qes.length === 0) {
    console.log("==>", ans);

    return;
  }

  const ch = qes.charAt(0);
  const res = qes.substring(1);

  name(res, ans + "");
  name(res, ans + ch);
}

name("abc", "");
