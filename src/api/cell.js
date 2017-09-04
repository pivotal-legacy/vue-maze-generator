const Cell = class {
  constructor({row, column}) {
    this.row = row
    this.column = column
    this.links = {}
  }

  toString() {
    return `Cell(${this.row}, ${this.column})`
  }

  link(cell, bidirectional=true) {
    this.links[cell] = cell
    if (bidirectional) {
      cell.link(this, false)
    }
  }

  unlink(cell, bidirectional=true) {
    this.links[cell] = undefined
    if (bidirectional) {
       cell.unlink(this, false)
    }
  }

  isLinked(cell) {
    return this.links[cell] === cell
  }

  allLinks() {
    return Object.values(this.links)
  }

  neighbors() {
    const list = []
    if (this.north) {
      list.push(this.north)
    }
    if (this.south) {
      list.push(this.south)
    }
    if (this.east) {
      list.push(this.east)
    }
    if (this.west) {
      list.push(this.west)
    }
    return list
  }
}

export default Cell;
