<template>
  <div id="maze">
    <div class="row" v-for="row in maze.grid">
      <div class="cell"
        v-bind:class="{
          north: cell.row === 0,
          east: cell.column === maze.grid.length-1 || !cell.isLinked(cell.east),
          south: cell.row === row.length-1 || !cell.isLinked(cell.south),
          west: cell.column === 0,
        }"
        v-for="cell in row">
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'maze',
  computed: mapGetters({
    maze: 'maze'
  }),
}
</script>

<style lang="scss">
#maze {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4em;
  .row {
    display: flex;
    flex-direction: row;
    .cell {
      font-size: 1.5em;
      width: 3em;
      height: 3em;
      border: solid white;
      &.north {
        border-top: solid;
      }
      &.east {
        border-right: solid;
      }
      &.south {
        border-bottom: solid;
      }
      &.west {
        border-left: solid;
      }
    }
  }
}
</style>
