const { BinaryTreeNode, PersonTreeNode } = require('.');

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

  it('takes a name and returns that person object', () => {
    const Jones = new PersonTreeNode({ name: 'Jones' });
    const Brook = new PersonTreeNode({ name: 'Brook' });
    const Smith = new PersonTreeNode({ name: 'Smith' });
    const Nelson = new PersonTreeNode({ name: 'Nelson' });

    Jones.add(Brook);
    Jones.add(Smith);
    Jones.add(Nelson);

    expect(Jones.findPerson('Brook')).toEqual({ name: 'Brook' });
    expect(Jones.findPerson('Smith')).toEqual({ name: 'Smith' });

    expect(Jones.left.value).toEqual('Brook');
    expect(Jones.right.value).toEqual('Smith');
    expect(Jones.right.left.value).toEqual('Nelson');
  });
});
