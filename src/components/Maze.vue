<template>
  <div id="maze">
    <div class="row" v-for="row in maze.grid">
      <span class="column" v-for="column in row">
        {{ column.toString() }}
      </span>
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
  flex-direction: row;
  justify-content: center;
  margin-top: 4em;
  .row {
    display: flex;
    flex-direction: column;
    .column {
      font-size: 1.5em;
      width: 5em;
      height: 5em;
    }
  }
}
</style>
