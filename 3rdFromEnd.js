const { LinkedList, _Node } = require("./linkedList");
// Test the functions
const { main } = require("./singlyLinkedList");
const { LinkedListFuncs } = require("./supplementalFunctions");

let SLL = main();
console.log(LinkedListFuncs.display(SLL));

const thirdFromEnd = (linkedList) => {
    //start at the beginning
    let currNode = linkedList.head;
    // move over list incrementing currNode
    while (currNode) {
      if (currNode.next.next.next === null) {
        return currNode;
      }
      currNode = currNode.next;
    }
  };
  
  console.log(thirdFromEnd(SLL));