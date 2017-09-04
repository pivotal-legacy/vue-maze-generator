import test from 'ava';
import Cell from '../../src/api/cell'

test('it should have a position', t => {
  const cell = new Cell({row: 0, column: 1})
  t.is(cell.row, 0);
  t.is(cell.column, 1);
});

test('it should be able to link and unlink with other cells', t => {
  const cell1 = new Cell({row: 0, column: 0})
  const cell2 = new Cell({row: 0, column: 1})

  cell1.link(cell2)

  t.is(cell1.isLinked(cell2), true);
  t.is(cell2.isLinked(cell1), true);

  cell1.unlink(cell2)

  t.is(cell1.isLinked(cell2), false);
  t.is(cell2.isLinked(cell1), false);
});

test('it should list all cells connected to this cell', t => {
  const cell1 = new Cell({row: 0, column: 0})
  const cell2 = new Cell({row: 0, column: 1})

  cell1.link(cell2)

  const cells = cell1.allLinks();
  t.is(cells.length, 1);
  t.is(cells[0], cell2);
});

test('it should allow recording of neighbors', t => {
  const cell1 = new Cell({row: 0, column: 0})
  const cell2 = new Cell({row: 0, column: 1})

  cell1.north = cell2

  const cells = cell1.neighbors();
  t.is(cells.length, 1);
  t.is(cells[0], cell2);
});
