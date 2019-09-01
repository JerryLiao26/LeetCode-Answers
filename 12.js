function intToRoman(num) {
  let input = num
  let output = ""

  while (input >= 1000) {
    output += "M"

    input -= 1000
  }

  while (input >= 500) {
    if (input >= 900) {
      output += "CM"

      input -= 900
    } else {
      output += "D"

      input -= 500
    }
  }

  while (input >= 100) {
    if (input >= 400) {
      output += "CD"

      input -= 400
    } else {
      output += "C"

      input -= 100
    }
  }

  while (input >= 50) {
    if (input >= 90) {
      output += "XC"

      input -= 90
    } else {
      output += "L"

      input -= 50
    }
  }

  while (input >= 10) {
    if (input >= 40) {
      output += "XL"

      input -= 40
    } else {
      output += "X"

      input -= 10
    }
  }

  while (input >= 5) {
    if (input >= 9) {
      output += "IX"

      input -= 9
    } else {
      output += "V"

      input -= 5
    }
  }

  while (input >= 1) {
    if (input >= 4) {
      output += "IV"

      input -= 4
    } else {
      output += "I"

      input -= 1
    }
  }

  return output
}
