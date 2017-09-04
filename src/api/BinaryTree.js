import Grid from './Grid'

const BinaryTree = class {
  static on(grid) {
    grid.eachCell((cell) => {
      const neighbors = []
      if (cell.north) {
        neighbors.push(cell.north)
      }
      if (cell.east) {
        neighbors.push(cell.east)
      }
      const index = Math.floor(Math.random() * neighbors.length)
      const neighbor = neighbors[index]
      if (neighbor) {
        cell.link(neighbor)
      }
    })
    return grid
  }
}

export default BinaryTree;
