const picked: number = 8;
const n: number = 12;

const guess = (n:number): number => {
  if (n < picked) return 1;
  if (n > picked) return -1;
  // if (n === picked) return 0;
  return 0;
}

function guessNumber(n: number): number {
  let min: number = 1;
  let max: number = n;

  while (min < max) {
      const mid: number = Math.floor( min + (max - min)/2 );

      const result: number = guess(mid);

      if (result <= 0) {
          max = mid
      } else {
          min = mid + 1;
      }
  }
  return min;
};

console.log(
  's',
  guessNumber(n), // 8
)