const createNode = function(value) {
  if (value === null) {
    return null;
  }
  return {
    value,
    next: null
  }
}

class LinkedList {
  constructor(value = null) {
    const node = createNode(value);

    this.head = node,
    this.tail = node,
    this.length = head ? 1 : 0
  }

  attachHead(value) {
    const node = createNode(value);

    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
      this.length++
      return node;
    }

    node.next = this.head;
    this.head = node;
    this.length++
    return node;
  }

  attachTail(value) {
    const node = createNode(value);

    if (this.head === null) {
      this.tail = node;
      this.head = this.tail;
      this.length++
      return node;
    }

    this.tail.next = node;
    this.tail = node;
    this.length++
    return node;
  }

  shift() {
    if (this.head === null) {
      return null;
    }

    const oldHead = this.head;
    const newHead = this.head.next;
    this.head = newHead;
    oldHead.next = null;

    if (newHead === this.tail) {
      this.tail = null;
    }

    this.length--;
    return newHead;
  }

  findPrevNode(node = this.tail) {
    if (node === null) {
      return null;
    }
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.next === node) {
        break;
      }
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  pop() {
    if (this.head === null) {
      return null;
    }

    const oldTail = this.tail;
    const newTail = this.findPrevNode();
    if (newTail !== null) {
      newTail.next = null;
    }
    this.tail = newTail;

    if (oldTail === this.head) {
      this.head = null;
    }

    this.length--;
    return newTail;
  }

  insert(value, index) {
    if (!index) {
      return null;
    }

    if (index <= 0) {
      const node = this.attachHead(value);
      return node;
    }

    if (index >= this.length) {
      const node = this.attachTail(value);
      return node;
    }

    let prevNode = null;
    let currentNode = this.head;
    let currentNodeIndex = 0;
    const node = createNode(value);

    while (currentNode !== null && currentNodeIndex !== index) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      currentNodeIndex++;
    }

    node.next = currentNode;
    prevNode.next = node
    this.length++;
    return node;
  }

  remove(index) {
    if (index < 0 || index >= this.length || !index) {
      return null;
    }

    if (index === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    let prevNode = null;
    let currentNode = this.head;
    let currentNodeIndex = 0;

    while (currentNode !== null && currentNodeIndex !== index) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      currentNodeIndex++;
    }

    prevNode.next = currentNode.next;
    currentNode.next = null;
    this.length--;
    return currentNode;
  }

  find(value) {
    if (this.head.value === value) {
      return this.head
    }

    let node = this.head
    while (node) {
      if (node.value === value) {
        return node;
      }
      node = node.next;
    }
    return null;
  }
}

const node = createNode(5);
const list = new LinkedList(node)

console.log(list.length)

// console.log(list.length)
// console.log(list.find(5))



