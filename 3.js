function lengthOfLongestSubstring(s) {
  let max = 0

  for (var key in s) {
    let dict = {}
    let count = 0

    for (let i = key; i < s.length; i ++) {
      if (dict.hasOwnProperty(s[i])) {
        break
      } else {
        count ++

        dict[s[i]] = true
      }
    }

    // Set number
    if (count > max) {
      max = count
    }
  }

  return max
}
