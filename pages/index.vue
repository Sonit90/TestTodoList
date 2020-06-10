<template>
  <section class="container">
    <div class="row">
      <div class="table-container">
        <todo-table
          title="Задачи"
          :data="filteredTasks"
          :columns="columns">
          <template #top-after>
            <nuxt-link
              class="base-button base-button-small"
              :to="{name: 'add'}">
              Добавить задачу
              <span class="material-icons ml-sm">
                note_add
              </span>
            </nuxt-link>
          </template>
          <template
            #title="{row}">
            <span
              :class="{del:row.done}"
              v-text="row.title"/>
          </template>
          <template
            #done="{row}">
            <input
              type="checkbox"
              v-model="row.done"
            >
          </template>
          <template #controls="{row}">
            <nuxt-link
              class="base-button"
              :to="{name: 'id', params:{id: row.id}}">
              <span class="material-icons">
                visibility
              </span>
            </nuxt-link>
            <nuxt-link
              class="base-button"
              :to="{name: 'edit-id', params:{id: row.id}}">
              <span class="material-icons">
                edit
              </span>
            </nuxt-link>
            <BaseButton @click="REMOVE_TASK(row.id)">
              <span class="material-icons">
                delete
              </span>
            </BaseButton>
          </template>
        </todo-table>
      </div>
      <Filters class="filters"/>

    </div>
  </section>
</template>

<script>
  import { mapMultiRowFields } from 'vuex-map-fields';
  import {mapState, mapMutations} from 'vuex'
  import TodoTable from '../components/TodoTable'
  import BaseButton from '../components/BaseButton'
  import Filters from '../components/Filters'

export default {
  name: 'TodoList',
  data () {
    return {
      columns: [
        {label: 'Статус', name: 'done'},
        {label: 'Название', name: 'title'},
        {label: 'Категория', name: 'category'},
        {label: 'Управление', name: 'controls'},
        ],
    }
  },
  components: { Filters, BaseButton, TodoTable },
  computed: {
    ...mapMultiRowFields(['tasks']),
    ...mapState([ 'categories', 'filters']),
    filteredTasks(){
      return this.tasks.filter(
        e=>this.filters.categories.includes(e.category)
        &&(e.done===this.filters.showDone
            ||!e.done===this.filters.showUndone))
    }
  },
  methods: {
    ...mapMutations(['ADD_TASK', 'REMOVE_TASK']),
  },

}
</script>

<style lang="scss" scoped>
h2{
  font-size: 20px;
  letter-spacing: .005em;
  font-weight: 400;
  text-align: left;
  padding: 12px 16px;
}
.table-container{
  width: 700px;
  .del{
    text-decoration: line-through;
  }
}
.filters{
  margin-left: 16px;
}
.icon{
  width: 24px;
}
</style>

