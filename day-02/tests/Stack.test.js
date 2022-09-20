const { Stack } = require('../Stack.js');

describe('Stack', () => {
  it('push should add item to back', () => {
    const stack = new Stack();
    stack.push('fox');
    expect(stack.peek()).toEqual('fox');
  });

  it('pop should remove item from back', () => {
    const stack = new Stack(['fox', 'goose', 'lizard']);
    stack.pop();
    expect(stack.peek()).toEqual('goose');
  });
});
