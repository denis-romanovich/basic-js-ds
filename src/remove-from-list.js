const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  return removeKFromListRecursion(l, k);

  function removeKFromListRecursion(list, k) {
    if (list === null) {
      return list;
    }

    if (list.value == k) {
      list = list.next;
      removeKFromListRecursion(list, k);
      return list;
    }

    if (list.next !== null && list.next.value == k) {
      list.next = list.next.next;
      removeKFromListRecursion(list, k);
      return list;
    }

    removeKFromListRecursion(list.next, k);

    return list;
  }
}

module.exports = {
  removeKFromList,
};
