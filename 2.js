function ListNode(val) {
  this.val = val;
  this.next = null;
}

let l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)

let l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)

function addTwoNumber(l1, l2) {
  let l1_current = l1
  let l2_current = l2
  let result = new ListNode(0)
  let result_current = result

  let carry = false

  while(true) {
    let sum = (l1_current ? l1_current.val: 0) + (l2_current ? l2_current.val : 0)

    if (carry) {
      sum += 1

      // Reset
      carry = false
    }

    // Carry
    if (sum >= 10) {
      carry = true
    }

    // Set value
    result_current.val = sum % 10

    // Forward
    l1_current = (l1_current ? l1_current.next : null)
    l2_current = (l2_current ? l2_current.next : null)

    if (l1_current != null || l2_current != null) {
      result_current.next = new ListNode(0)
      result_current = result_current.next
    } else {
      if (sum >= 10) {
        result_current.next = new ListNode(1)
      }

      return result
    }
  }
}
