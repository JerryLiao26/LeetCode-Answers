const nums = [2, 7, 11, 15]
const target = 9

function twoSum(nums, target) {
  // Outer loop
  for (let i in nums) {
    // Inner loop
    for (let j = (parseInt(i) + 1); j < nums.length; j++) {
      if ((nums[i] + nums[j]) == target) {
        return [i, j]
      }
    }
  }
}
