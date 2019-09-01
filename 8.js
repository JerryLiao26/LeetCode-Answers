function myAtoi(str) {
  // Pre-parse
  let input = str.trim()

  // Parse
  let output = 0
  let neg_flag = false
  let sym_flag = false
  let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  for (var each of input) {
    if (each == '-' && !sym_flag) {
      sym_flag = true
      neg_flag = true
    } else if (each == '+' && !sym_flag) {
      sym_flag = true
      continue
    } else {
      sym_flag = true
      if (i != -1) {
        const i = digits.indexOf(each)
        output = output * 10 + parseInt(i)
      } else {
        break
      }
    }
  }

  // Set negative
  if (neg_flag) {
    output = -1 * output
  }

  // Check bound
  const left_bound = -2147483648
  const right_bound = 2147483647
  if (output < left_bound) {
    return left_bound
  } else if (output > right_bound) {
    return right_bound
  }

  return output
}
