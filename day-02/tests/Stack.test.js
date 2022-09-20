const { Stack } = require('../Stack.js');

describe('Stack', () => {
  it('push should add a new item to stack', () => {
    const stack = new Stack();
    stack.push('fox');
    expect(stack.peek()).toEqual('fox');
  });
});
