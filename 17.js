function letterCombinations(digits) {
  const dict = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz"
  }

  let current_results = []

  for (let digit of digits) {
    // Init
    let current = dict[digit].split("")
    if (current_results.length == 0) {
      current_results = current

      continue
    }

    // Build
    let results = []
    for (let x of current_results) {
      for (let y of current) {
        results.push(x + y)
      }
    }

    current_results = results
  }

  return current_results
}
