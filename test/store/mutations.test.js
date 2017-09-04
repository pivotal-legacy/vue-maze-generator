import test from 'ava';
import { updateMaze } from '../../src/store/mutations'

test('it should update the maze', t => {
  const state = {maze: null}
  const maze = "a maze"
  updateMaze(state, maze)
  t.is(state.maze, "a maze");
});
