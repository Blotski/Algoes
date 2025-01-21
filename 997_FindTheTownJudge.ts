function findJudge(n: number, trust: number[][]): number {

  const trustCount: number[] = new Array(n + 1).fill(0);
  const trustedByCount: number[] = new Array(n + 1).fill(0);

  for (let [truster, trustee] of trust) {
      trustCount[truster]++;
      trustedByCount[trustee]++;
  }

  for (let i = 1; i <= n; i++) {
      if(trustCount[i] === 0 && trustedByCount[i] === n - 1) return i;
  }

  return -1;
};