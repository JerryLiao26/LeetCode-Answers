function isValid(s) {
  let stack = []

  for (let each of s) {
    if (each == "(" || each == "[" || each == "{") {
      stack.push(each)
    } else if (each == ")" && stack.pop() != "(") {
      return false
    } else if (each == "]" && stack.pop() != "[") {
      return false
    } else if (each == "}" && stack.pop() != "{") {
      return false
    }
  }

  if (stack.length == 0) {
    return true
  }

  return false
}
