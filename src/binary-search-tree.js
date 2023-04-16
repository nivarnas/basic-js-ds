const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor () {
    this._root = null
  }

  root() {
    return this._root;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(data) {
    this._root = addWithin(this._root, data)

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data)
      } else {
        node.right = addWithin(node.right, data)
      }

      return node;
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(data) {
    return searchWithin (this._root, data)

    function searchWithin(node, data) {
      if (!node) {
        return false
      } else {
        if (node.data === data) {
          return true
        } else {
          return data < node.data ?
            searchWithin(node.left, data) :
            searchWithin(node.right, data)
        }
      }
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(data) {
    return searchWithin (this._root, data)

    function searchWithin(node, data) {
      if (!node) {
        return null
      } else {
        if (node.data === data) {
          return node
        } else {
          return data < node.data ?
            searchWithin(node.left, data) :
            searchWithin(node.right, data)
        }
      }
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
    this._root = removeNode(this._root, data)

    function removeNode(node, data) {
      if  (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        } 

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let maxFromLeft = node.left;

        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right
        }
        node.data = maxFromLeft.data;
        node.left = removeNode(node.left, maxFromLeft.data);

        return node;
      }
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (!this._root) {
      return
    }

    let node = this._root;

    while (node.left) {
      node = node.left;
    }

    return node.data;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    if (!this._root) {
      return 
    }

    let node = this._root;

    while(node.right) {
      node = node.right;
    }

    return node.data;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};