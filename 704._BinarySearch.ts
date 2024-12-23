function search(nums: number[], target: number): number {
  let l: number = 0;
  let r: number = nums.length - 1;

  while(l < r) {
      const mid: number = Math.floor( l + (r - l)/2);

      if (nums[mid] < target) {
          l = mid + 1;
      } else {
          r = mid
      }
  }

  return nums[l] === target ? l : -1;
};

console.log(
  search([0,1,3,6,8], 3), // 2
  search([0,1,3,6,8], 8), // 4
  search([0,1,3,6,8], 0), // 0
  search([0,1,3,6,8], -2), // -1
  search([0,1,3,6,8], 7), // -1
)