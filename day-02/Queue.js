class Queue {
  #list;

  constructor(list) {
    this.#list = list || [];
  }

  enqueue(item) {
    this.#list.push(item);
  }

  dequeue() {
    this.#list.shift();
    return this.#list.length === 0 ? null : this.#list;
  }

  hasNext() {
    return this.#list.length >= 1 ? true : false;
  }

  get count() {
    return this.#list.length;
  }

  get list() {
    return this.#list;
  }
}

module.exports = { Queue };
