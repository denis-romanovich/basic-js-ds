const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {

  constructor() {
    this.root = null;
  }

  getUnderlyingList() {
   return this.root;
  }

  enqueue(value) {
   
    this.root = addRecursion(this.root, value);

    function addRecursion(node, value) {

      if (node === null) {
        return new ListNode(value);
      } 
      
      node.next = addRecursion(node.next, value);
      return node;
    }
  }

  dequeue() {
    const value = this.root.value;
    this.root = this.root.next;
    return value;
  }
}

module.exports = {
  Queue
};
