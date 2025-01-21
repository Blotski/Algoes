function countUniqueCyclicPairs(arr: number[]): number {
  const cyclicGroups: Set<string> = new Set(); // 679

  for (let num of arr) {
    // make canonical order
    const canonical: string = num.toString().split('').sort().join(''); // O(4n)
    // add to set
    console.log(canonical)
    cyclicGroups.add(canonical)

  }
  
  return arr.length - cyclicGroups.size;
}

// Example Usage
const arr = [679, 796, 976, 123, 123,123,123,231, 312, 345];
console.log(countUniqueCyclicPairs(arr)); 