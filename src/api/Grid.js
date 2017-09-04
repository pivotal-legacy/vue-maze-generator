import Cell from '../../src/api/Cell'

const Grid = class {
  constructor({rows, columns}) {
    this.rows = rows
    this.columns = columns
    this.size = rows * columns
    this.grid = this.prepareGrid()
    this.configureCells()
  }

  toString() {
    return `Grid(${this.rows}, ${this.columns})`
  }

  prepareGrid() {
    return Array(this.rows).fill().map((_, row) => {
      return Array(this.columns).fill().map((_, column) => {
        return new Cell({row, column})
      })
    })
  }

  configureCells() {
    this.eachCell((cell) => {
      const {row, column} = cell
      cell.north = this.getGrid(row - 1, column)
      cell.south = this.getGrid(row + 1, column)
      cell.west = this.getGrid(row, column - 1)
      cell.east = this.getGrid(row, column + 1)
    })
  }

  eachCell(fn) {
    this.eachRow((row) => {
      for (let cell of row) {
        fn(cell)
      }
    })
  }

  eachRow(fn) {
    for (let row of this.grid) {
      fn(row)
    }
  }

  getGrid(row, column) {
    if (row < 0 || row >= this.rows) {
      return undefined
    }
    if (column < 0 || column >= this.columns) {
      return undefined
    }
    return this.grid[row][column]
  }
}

export default Grid;
