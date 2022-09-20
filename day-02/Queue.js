class Queue {
  #list;

  constructor(list) {
    this.#list = list || [];
  }

  enqueue(item) {
    this.#list.push(item);
  }

  dequeue() {
    return this.#list.shift();
  }

  get count() {
    return this.#list.length;
  }

  get list() {
    return this.#list;
  }
}

module.exports = { Queue };
