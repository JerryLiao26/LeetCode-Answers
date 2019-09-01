function convert(s, numRows) {
  // Deal with single
  if (numRows == 1) {
    return s
  }

  let output = ""
  let scan_result = []

  // Create array
  for (let i = 0; i < numRows; i ++) {
    scan_result[i] = []
  }

  // Scan loop
  let current_line = 0
  let direction = false
  for (let i = 0; i < s.length; i ++) {
    // Change direction
    if (current_line == (numRows) - 1) {
      direction = true
    } else if (current_line == 0) {
      direction = false
    }

    // Record value
    scan_result[current_line].push(s[i])

    // Set next
    if (direction) {
      current_line --
    } else {
      current_line ++
    }
  }

  // Output
  for (let i in scan_result) {
    for (let j in scan_result[i]) {
      output += scan_result[i][j]
    }
  }

  return output
}
