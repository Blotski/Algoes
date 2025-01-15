function longestConsecutive(nums: number[]): number { 
  if (nums.length === 0) return 0;

  const set = new Set<number>(nums); // [100,4,200, 3]
  let longest: number = 1; 

  for (let num of set) { // 3
      if (!set.has(num - 1)) {
          let next: number = num; // 4
          let currLongest: number = 0;
          
          while (set.has(next)) { 
              currLongest++; // 2
              next++;
          }
          longest = Math.max(longest, currLongest); //2
      }  
  }

  return longest;
}


// function longestConsecutive(nums: number[]): number {
//     if (nums.length === 0) return 0;
//     nums.sort((a,b) => a - b);

//     let longest: number = 1;

//     let currLongest: number = 1;
//     for (let i = 1; i < nums.length; i++) {
//         if (Math.abs(nums[i] - nums[i - 1 ]) === 1) {
//             currLongest++;
//             longest = Math.max(currLongest, longest);
//         } else if(nums[i] === nums[i - 1]) {
//             continue;
//         }else {
//             currLongest = 1;
//         }
//     }

//     return longest;
// };