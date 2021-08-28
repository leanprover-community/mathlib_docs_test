const commit = [["https://github.com/leanprover-community/mathlib/blob/master/src/", "https://github.com/leanprover-community/mathlib/blob/1aaff8da2373097e637fd9243bc52cce7ce0bb7e/src/"]];
function redirectTo(tgt) {
  let loc = tgt;
  for (const [prefix, replacement] of commit) {
    if (tgt.startsWith(prefix)) {
      loc = tgt.replace(prefix, replacement);
      break;
    }
  }
  window.location.replace(loc);
}
