function isPerfectSquare(num: number): boolean {
    
  // for (let i = 1; ;i++) {
  //     const product: number = i * i;
  //     if ((product) < num) continue;
  //     if (product === num) return true;
  //     return false;
  // }

  // solution 2
  let l: number = 1;
    let r: number = num / 2;

    while (l < r) {
        const mid: number = Math.floor(l + (r - l)/2);

        if (mid * mid < num) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }

    return l * l === num;
  
};

console.log(
  isPerfectSquare(9), // true
  isPerfectSquare(256), // true
  isPerfectSquare(10), // false
)