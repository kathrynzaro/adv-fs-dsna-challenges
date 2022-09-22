const { BinaryTreeNode } = require('.');

describe('node based data structures', () => {
  it('returns a binary tree and adds nodes', () => {
    const B = new BinaryTreeNode('B');
    const A = new BinaryTreeNode('A');
    const C = new BinaryTreeNode('C');
    const D = new BinaryTreeNode('D');

    B.add(A);
    B.add(D);
    B.add(C);

    expect(B.left.value).toEqual('A');
    expect(B.right.value).toBe('D');
    expect(B.right.left.value).toBe('C');
  });
});
