const { Queue } = require('../Queue.js');
const { Stack } = require('../Stack.js');

describe('Stack', () => {
  it('push should add item to back', () => {
    const stack = new Stack(['fox', 'goose', 'lizard']);
    stack.push('cat');
    expect(stack.list).toEqual(['fox', 'goose', 'lizard', 'cat']);
  });

  it('pop should remove item from back', () => {
    const stack = new Stack(['fox', 'goose', 'lizard']);
    stack.pop();
    expect(stack.list).toEqual(['fox', 'goose']);
  });

  it('peek returns item at the end', () => {
    const stack = new Stack(['fox', 'goose', 'lizard', 'llama']);
    expect(stack.peek()).toEqual('llama');
  });

  it('test cases', () => {
    const stack = new Stack();
    stack.push('fox');
    stack.push('goose');
    stack.push('lizard');
    stack.pop();
    expect(stack.peek()).toEqual('goose');
    stack.pop();
    expect(stack.list).toEqual(['fox']);
    stack.push('llama');
    expect(stack.list).toEqual(['fox', 'llama']);
    stack.pop();
    expect(stack.peek()).toEqual('fox');
    stack.pop();
    expect(stack.list).toEqual([]);
  });
});

describe('Queue', () => {
  it('enqueue should add item to back', () => {
    const queue = new Queue(['cat']);
    queue.enqueue('fox');
    expect(queue.count).toEqual(2);
    expect(queue.list).toEqual(['cat', 'fox']);
  });

  it('dequeue should remove item from front', () => {
    const queue = new Queue(['fox', 'goose', 'lizard']);
    queue.dequeue();
    expect(queue.count).toEqual(2);
    expect(queue.list).toEqual(['goose', 'lizard']);
  });
});
