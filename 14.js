function longestCommonPrefix(strs) {
  let flag = false
  let common = ""

  for (let str of strs) {
    // Deal with first
    if (!flag) {
      common = str
      flag = true

      continue
    }

    // No common
    if (common == "" && flag) {
      break
    }

    // Deal first
    if (str.length < common.length) {
      common = common.slice(0, str.length)
    }

    // Check common
    for (let key in str) {
      if (str.hasOwnProperty(key) && common.hasOwnProperty(key)) {
        if (str[key] != common[key]) {
          console.log("KEY::", key)
          common = str.slice(0, key)

          break
        }
      } else {
        console.log("KEY::", key)
        common = str.slice(0, key)

        break
      }
    }
  }

  return common
}
