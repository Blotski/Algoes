function isSubsequence(s: string, t: string): boolean {
  let i: number = 0;

  for (let j = 0; j < t.length; j++) {
      if (t[j] === s[i]) i++;
  }

  return i === s.length;
};