const { Stack } = require('../Stack.js');

describe('Stack', () => {
  it('push should add item to back', () => {
    const stack = new Stack(['fox', 'goose', 'lizard']);
    stack.push('cat');
    expect(stack.peek()).toEqual('cat');
  });

  it('pop should remove item from back', () => {
    const stack = new Stack(['fox', 'goose', 'lizard']);
    stack.pop();
    expect(stack.peek()).toEqual('goose');
  });

  it('peek returns item at the end', () => {
    const stack = new Stack(['fox', 'goose', 'lizard', 'llama']);
    expect(stack.peek()).toEqual('llama');
  });
});
