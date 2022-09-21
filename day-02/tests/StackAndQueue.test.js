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

  it('stack test cases', () => {
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
    expect(stack.pop()).toBe(null);
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

  it('hasNext checks to see if there is an item waiting in the queue', () => {
    const queue = new Queue(['fox']);
    expect(queue.count).toEqual(1);
    expect(queue.hasNext()).toEqual(true);
  });

  it('queue test cases', () => {
    const queue = new Queue();
    queue.enqueue('fox');
    queue.enqueue('goose');
    queue.enqueue('lizard');
    queue.dequeue();
    expect(queue.hasNext()).toEqual(true);
    queue.dequeue();
    expect(queue.list).toEqual(['lizard']);
    queue.enqueue('llama');
    queue.dequeue();
    expect(queue.hasNext()).toEqual(true);
    queue.dequeue();
    expect(queue.hasNext()).toEqual(false);
    expect(queue.dequeue()).toBe(null);
  });
});

describe('reverse', () => {
  it('should reverse an array', () => {
    const stack = new Stack([12, 3, 5, 7]);
    stack.reverseStack();
    expect(stack.list).toEqual([7, 5, 3, 12]);
  });
});
