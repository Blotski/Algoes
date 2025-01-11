class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
}

function reorderList(head: ListNode | null): void {
  let curr: ListNode | null = null;
  let tail: ListNode | null = null;
  let mid: ListNode | null = null;
  let fast: ListNode | null = head;
  let slow: ListNode | null = head;

  // find mid
  while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
  }
  mid = slow;

  // reverse from the mid
  let prev: ListNode | null = mid;
  curr = mid.next;
  while (curr) {
      let next: ListNode | null = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
  }

  mid.next = null;
  tail = prev;
  curr = head;

  // zip together
  // 1 -> 4 -> 2 -> 3
  while ( tail && tail.next ) {//
  
      let currNext: ListNode | null = curr.next; //
      curr.next = tail; // 
      curr = currNext;
      let tailNext: ListNode | null = tail.next; // 
      tail.next = curr; // 
      tail = tailNext; // 3
  }
};