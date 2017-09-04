import test from 'ava';
import Grid from '../../src/api/Grid'
import Cell from '../../src/api/Cell'

test('it should have a position and cells created at these positions', t => {
  const grid = new Grid({rows: 2, columns: 3})
  t.is(grid.rows, 2);
  t.is(grid.columns, 3);
  t.is(grid.size, 6);
  t.is(grid.grid.length, 2)
  t.is(grid.grid[0].length, 3)
  t.is(grid.grid[0][0].row, 0)
  t.is(grid.grid[0][0].column, 0)
  t.is(grid.grid[1][0].row, 1)
  t.is(grid.grid[1][0].column, 0)
  t.is(grid.grid[0][1].row, 0)
  t.is(grid.grid[0][1].column, 1)
});


test('cells should have neighbors defined', t => {
  const grid = new Grid({rows: 3, columns: 3})
  t.is(grid.grid[1][1].north, grid.grid[0][1])
  t.is(grid.grid[1][1].south, grid.grid[2][1])
  t.is(grid.grid[1][1].west, grid.grid[1][0])
  t.is(grid.grid[1][1].east, grid.grid[1][2])
});
