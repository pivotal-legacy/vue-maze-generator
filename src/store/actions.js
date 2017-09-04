import BinaryTree from '../api/BinaryTree'
import Grid from '../api/Grid'

export const generateMaze = ({commit}, algorithm = BinaryTree) => {
  commit('updateMaze', algorithm.on(new Grid({rows: 4, columns: 4})));
}

export default {
  generateMaze
}
