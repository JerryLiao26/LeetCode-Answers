function maxArea(height) {
  let max = 0

  for (let i = 0; i < height.length; i ++) {
    for (let j = (i + 1); j < height.length; j ++) {
      let h = height[i] > height[j] ? height[j] : height[i]
      let area = (j - i) * h

      if (area > max) {
        max = area
      }
    }
  }

  return max
}
