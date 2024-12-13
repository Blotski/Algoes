// [2,2,3,1]
function thirdMax(nums: number[]): number {

    let [first, second, third] = Array(3).fill(-Infinity);

    for (let num of nums) {
        // if( [first, second, third].includes(num)) continue;
        if (num === first || num === second || num === third) continue;

        if (num > first) {
            [first, second, third] = [num, first, second];
        } else if (num > second) {
            [ second, third ] = [num, second]
        } else if (num > third) {
            third = num;
        }
    }

    return third !== -Infinity ? third : first;
};

console.log(
    thirdMax([2,2,3,1]), // 1
    thirdMax([2,5,4,9,2,3,1]), // 4
    thirdMax([2,1, -5]), // -5
    thirdMax([2,1]), // 2
    thirdMax([-5]), // -5
)