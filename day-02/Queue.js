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
    const list = this.#list.length === 0 ? null : this.#list;
    return list;
  }

  hasNext() {
    const next = this.#list.length >= 1 ? true : false;
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
