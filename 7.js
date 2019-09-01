function reverse(x) {
  let input = x
  let output = 0

  while(input != 0) {
    let current = input % 10
    input = parseInt(input / 10)

    output = output * 10 + current
  }

  const left_bound = -2147483648
  const right_bound = 2147483647

  if (output >= left_bound && output <= right_bound) {
    return output
  } else {
    return 0
  }
}
