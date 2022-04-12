let l1 = [2, 4, 3];
let l2 = [5, 6, 4];

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  const node = new ListNode();
  let tmpNode = node;

  let carry = 0;

  while (l1 || l2 || carry) {
    tmpNode.next = new ListNode();
    tmpNode = tmpNode.next;

    const left = l1 ? l1.val : 0; // 2
    const right = l2 ? l2.val : 0; // 8
    
    let sum = left + right + carry; // 2 + 8 + 0 = 10

    const value = sum < 10 ? sum : sum % 10; // 0

    carry = sum < 10 ? 0 : 1; // 0

    tmpNode.val = value;

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  return node.next;
};

console.log(addTwoNumbers(l1, l2));

