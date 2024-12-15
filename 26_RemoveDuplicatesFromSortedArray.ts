function removeDuplicates(nums: number[]): number {
  let nextUniqueIndex = 1;

  for (let num of nums) {
      if (num !== nums[nextUniqueIndex - 1]) {
          nums[nextUniqueIndex] = num;
          nextUniqueIndex++;
      }
  }
  return nextUniqueIndex;

  // let l: number = 0;// 1
  // for (let r = 1; r < nums.length; r++) { // 2 =[3]
  //     if (r <= l + 1 && nums[r] > nums[l]) {//
  //         l++;
  //     } else if (r > l + 1 && nums[r] > nums[l]) {
  //         [nums[l + 1], nums[r]] = [ nums[r], nums[l + 1]]
  //         l++;
  //     }
  // }
  // return l + 1;
};

console.log(
  removeDuplicates([1,1,2,2,3])
)
