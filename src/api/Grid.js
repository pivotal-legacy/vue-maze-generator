import Cell from '../../src/api/Cell'

const Grid = class {
  constructor({rows, columns}) {
    this.rows = rows
    this.columns = columns
    this.grid = this.prepareGrid()
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
}

export default Grid;
