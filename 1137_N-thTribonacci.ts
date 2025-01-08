function tribonacci(n: number): number {

  if (n === 0) return 0;
  if (n === 1) return 1;
  
  let t0: number = 0;
  let t1: number = 1;
  let t2: number = 1;

  for (let i = 2; i < n; i++) {
      let next: number = t2 + t1 + t0; // 4
      t0 = t1; // 1
      t1 = t2; // 2
      t2 = next; // 4
  }

  return t2;
};