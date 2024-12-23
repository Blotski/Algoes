function twoSum(numbers: number[], target: number): number[] {
  // const binarySearch = (nums: number[], l:number, num: number): number => {// [...], 4
  //     // return: index or -1;
  //     // let l: number = 0;
  //     let r: number = nums.length - 1;

  //     while (l < r) { // 2,2
  //         const mid: number = Math.floor(l + (r - l)/2); // 1

  //         if (nums[mid] < num) {// 3
  //             l = mid + 1;
  //         } else {
  //             r = mid;
  //         }
  //     }

  //     return nums[l] === num ? l : -1;
  // }

  // for (let i = 0; i < numbers.length; i++) {// 0: 2; 
  //     const searchNumber: number = target - numbers[i]; // 4

  //     const secondIndex: number = binarySearch(numbers, i + 1, searchNumber);

  //     console.log(secondIndex)
  //     if (secondIndex > - 1) return [i + 1, secondIndex + 1]
  // }


  let l: number = 0;
  let r: number = numbers.length - 1;

  while (l < r) {
    const sum: number = numbers[l] + numbers[r];
    if (sum === target) {
        return [l + 1, r + 1]
    } else if (sum < target) {
        l++;
    } else {
        r--;
    }
  }
  return [-1, -1]
};