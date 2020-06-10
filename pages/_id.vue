<template>
  <div>
    <Card
      class="card"
      v-if="task">
      <div>
        <div class="row align-center">
          Название: <h2>{{ task.title }}</h2>
        </div>
        <div
          class="row align-center"
          v-if="task.category">
          Категория: <h3>{{ task.category }}</h3>
        </div>
        <div class="row align-center">
          Статус: <span
            class="material-icons icon"
            v-if="task.done">
            check
          </span>
          <span
            class="material-icons icon"
            v-else>
            highlight_off
          </span>
        </div>
      </div>

    </Card>
    <nuxt-link
      class="base-button"
      :to="{name: 'index'}">
      Назад
      <span class="material-icons">
        history
      </span>
    </nuxt-link>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import BaseButton from '../components/BaseButton'
  import Card from '../components/Card'

  export default {
    name: "ViewTask",
    components: { Card, BaseButton },
    data () {
      return {
        id: this.$route.params.id,
      }
    },
    computed: {
      ...mapGetters(['getTask']),
      task() {
        return this.getTask(this.id);
      }
    }
  }
</script>

<style scoped lang="scss">
    .row{
      margin-bottom: 16px;
      h2,h3{
        margin-left: 16px;
      }
    }
  .icon{
    margin-left: 16px;
  }

</style>
