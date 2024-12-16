function hammingWeight(n: number): number {
  let output: number = 0;
  // const binary: string = n.toString(2);
  // for (let num of binary){
  //     if (num === '1') output++;
  // }

  while (n !== 0) {
      n &= n -1;
      output++;
  }
  return output;
};

console.log(
  hammingWeight(11), // 3
  hammingWeight(128), // 1
)