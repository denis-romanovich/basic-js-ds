const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(data) {
    this.data = data;
    this.leftNode = null;
    this.rightNode = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addRecursion(this.rootNode, data);

    function addRecursion(node, value) {
      if (node === null) {
        return new Node(value);
      }

      if (node.data > value) {
        node.leftNode = addRecursion(node.leftNode, value);
      }

      if (node.data < value) {
        node.rightNode = addRecursion(node.rightNode, value);
      }

      return node;
    }
  }

  has(data) {
    return hasRecursion(this.rootNode, data);

    function hasRecursion(node, value) {
      if (node === null) {
        return false;
      }

      if (node.data === value) {
        return true;
      }

      return value < node.data
        ? hasRecursion(node.leftNode, value)
        : hasRecursion(node.rightNode, value);
    }
  }

  find(data) {
    return findRecursion(this.rootNode, data);

    function findRecursion(node, value) {
      if (node === null) {
        return null;
      }

      if (node.data === value) {
        return node;
      }

      return value < node.data
        ? findRecursion(node.leftNode, value)
        : findRecursion(node.rightNode, value);
    }
  }

  remove(data) {
    this.rootNode = removeRecursion(this.rootNode, data);

    function removeRecursion(node, value) {
      if (node === null) {
        return null;
      }

      if (node.data > value) {
        node.leftNode = removeRecursion(node.leftNode, value);
        return node;
      }

      if (node.data < value) {
        node.rightNode = removeRecursion(node.rightNode, value);
        return node;
      }

      if (node.data === value) {
        if (node.leftNode === null && node.rightNode === null) {
          return null;
        }

        if (node.leftNode === null) {
          node = node.rightNode;
          return node;
        }

        if (node.rightNode === null) {
          node = node.leftNode;
          return node;
        }

        node.data = minRecursion(node.rightNode);
        node.rightNode = removeRecursion(node.rightNode, node.data);
        return node;

        function minRecursion(node) {
          if (node.leftNode === null) {
            return node.data;
          }

          return minRecursion(node.leftNode);
        }
      }
    }
  }

  min() {
    if (this.rootNode === null) {
      return null;
    }

    return minRecursion(this.rootNode);

    function minRecursion(node) {
      if (node.leftNode === null) {
        return node.data;
      }

      return minRecursion(node.leftNode);
    }
  }

  max() {
    if (this.rootNode === null) {
      return null;
    }

    return maxRecursion(this.rootNode);

    function maxRecursion(node) {
      if (node.rightNode === null) {
        return node.data;
      }

      return maxRecursion(node.rightNode);
    }
  }
}

module.exports = {
  BinarySearchTree,
};
