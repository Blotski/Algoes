class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
}

function sortedArrayToBST(nums: number[], l:number = 0, r:number = nums.length - 1): TreeNode | null {
  if (nums.length === 0 || l > r) return null;

  const midIndex: number = l + Math.floor((r - l) / 2);

  return new TreeNode(nums[midIndex], sortedArrayToBST(nums, l, midIndex - 1), sortedArrayToBST(nums, midIndex + 1, r))
};