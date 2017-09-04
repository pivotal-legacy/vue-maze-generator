import test from 'ava';
import Grid from '../../src/api/Grid'
import BinaryTree from '../../src/api/BinaryTree'

test('it should take a grid', t => {
  const grid = new Grid({rows: 2, columns: 3})
  BinaryTree.on(grid)
  t.pass();
});
