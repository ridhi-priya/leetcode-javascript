let nums = [2, 7, 11, 15];
target = 9;

var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const finddiff = target - nums[i];
    if (map.has(finddiff)) {
      return [map.get(finddiff), i];
    }
    map.set(nums[i], i);
  }
  return [];
};
document.write(twoSum(nums, target));
