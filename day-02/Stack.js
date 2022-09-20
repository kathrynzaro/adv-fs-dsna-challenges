class Stack {
  #list = [];

  constructor(initialList) {
    if (initialList) this.#list = initialList;
  }

  push(item) {
    return this.#list.push(item);
  }

  peek() {
    return this.#list[this.#list.length - 1];
  }

  pop() {
    this.#list.pop();
  }

  get list() {
    return this.#list;
  }
}

module.exports = { Stack };
