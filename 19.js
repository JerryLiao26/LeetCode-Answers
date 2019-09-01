function ListNode(val) {
  this.val = val;
  this.next = null;
}

function removeNthFromEnd(head, n) {
  let current = head
  let start = head
  let count = 0
  while (current != null) {
    // Period
    if (count > n) {
      start = start.next
    }

    // Step forward
    count ++
    current = current.next
  }

  // Concat
  if (start == head && count == n) {
    return head.next
  } else if (start == head && n == 1) {
    start.next = null
  } else {
    start.next = start.next.next
  }

  return head
}
