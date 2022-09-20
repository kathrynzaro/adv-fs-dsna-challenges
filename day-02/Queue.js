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

  hasNext() {
    const next = this.#list.length > 0 ? true : false;
    return next;
  }

  get count() {
    return this.#list.length;
  }

  get list() {
    return this.#list;
  }
}

module.exports = { Queue };
