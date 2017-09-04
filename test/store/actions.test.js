import test from 'ava';
import { generateMaze } from '../../src/store/actions';

test('it should generate a new maze', t => {
  const algorithm = {
    on: () => "a maze"
  }
  const commit = (action, payload) => {
    t.deepEqual(payload, "a maze")
  }
  generateMaze({commit}, algorithm)
});
