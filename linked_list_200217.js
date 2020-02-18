// using LinkedList class:

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   add(element) {
//     let node = new ListNode(element);
//     let current;

//     if (this.head === null) {
//       this.head = node;
//     } else {
//       current = this.head;
//       while (current.next) {
//         // console.log(current.next);
//         current = current.next;
//       }
//       current.next = node;
//       //   console.log("New node added");
//     }

//     this.size++;
//     // console.log("Element added");
//   }

//   traverse() {
//     let current = this.head;
//     let sumString = this.head.data.toString();

//     while (current.next) {
//       sumString = sumString.concat(current.next.data);
//       current = current.next;
//     }
//     return sumString
//       .split("")
//       .reverse()
//       .join("");
//   }
// }

// const list1 = new LinkedList();
// list1.add(2);
// list1.add(4);
// list1.add(3);

// const list2 = new LinkedList();
// list2.add(5);
// list2.add(6);
// list2.add(4);

// not using LinkedList class:

// function makeLinkedListFromArray(arrIn) {
//   let list = new ListNode(arrIn[0]);
//   let selectedNode = list;
//   for (let i = 1; i < arrIn.length; i++) {
//     selectedNode.next = new ListNode(arrIn[i]);
//     selectedNode = selectedNode.next;
//   }
//   return list;
// }

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const addTwoNumbers = function(l1, l2) {
  function traverseList(listIn) {
    let sumString = listIn.val.toString();

    while (listIn.next) {
      sumString = sumString.concat(listIn.next.val);
      listIn = listIn.next;
    }
    return sumString
      .split("")
      .reverse()
      .join("");
  }

  let twoListTotal = (Number(traverseList(l1)) + Number(traverseList(l2)))
    .toString()
    .split("")
    .reverse();

  function makeLinkedListFromArray(arrIn) {
    let list = new ListNode(arrIn[0]);
    let selectedNode = list;
    for (let i = 1; i < arrIn.length; i++) {
      selectedNode.next = new ListNode(arrIn[i]);
      selectedNode = selectedNode.next;
    }
    return list;
  }

  return makeLinkedListFromArray(twoListTotal);
};

const list1 = new ListNode(2);
list1.next = new ListNode(4);
list1.next.next = new ListNode(3);

const list2 = new ListNode(5);
list2.next = new ListNode(6);
list2.next.next = new ListNode(4);

console.log(addTwoNumbers(list1, list2));

// N.B.: Fails when one number is so large that JS represents it in scientific notation:

// const list3 = makeLinkedListFromArray([
//   1,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   1
// ]);

// const list4 = makeLinkedListFromArray([5, 6, 4]);

// console.log(addTwoNumbers(list3, list4));
