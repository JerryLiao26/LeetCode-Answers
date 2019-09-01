function isPalindrome(x) {
  // Deal with negative
  if (x < 0) {
    return false
  }

  let input = x
  let middle = 0

  while(input != 0) {
    let current = input % 10
    input = parseInt(input / 10)

    middle = middle * 10 + current
  }

  if (middle == x) {
    return true
  } else {
    return false
  }
}
