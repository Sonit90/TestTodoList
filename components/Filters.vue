<template>
  <div >
    <h2>Фильтры</h2>
    <Card>
      <div class="row column">
        <h3>Категории</h3>
        <div
          class="checkbox-list">
          <div
            v-for="category in categories"
            :key="`${category}checkbox-div`">
            <input
              :key="`${category}checkbox`"
              :id="`${category}checkbox`"
              :value="category"
              v-model="filterCategories"
              type="checkbox"
            >
            <label
              :for="`${category}checkbox`"
              :key="`${category}title`">{{ category }}</label>
          </div>
        </div>
      </div>
      <div class="row column">
        <h3>Показать</h3>
        <div
          class="checkbox-list">
          <div>
            <input
              type="checkbox"
              id="done"
              v-model="doneFilters"
            >
            <label for="done">Выполненные</label>
          </div>
          <div>
            <input
              v-model="undoneFilters"
              type="checkbox"
              id="undone"
            >
            <label for="undone">Невыполненные</label>
          </div>
        </div>
      </div>
    </Card>

  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import { mapFields } from 'vuex-map-fields';
  import Card from './Card'
  export default {
    name: 'Filters',
    components: { Card },
    computed: {
      ...mapState(['categories']),
      ...mapFields(['filters']),
      ...mapFields({
        filterCategories: 'filters.categories',
        doneFilters: 'filters.showDone',
        undoneFilters: 'filters.showUndone'
      }),
    },
  }
</script>

<style scoped lang="scss">
  h2{
    font-size: 20px;
    letter-spacing: .005em;
    font-weight: 400;
    text-align: left;
    padding: 12px 16px;
  }
  h3{
    margin-bottom: 16px;
  }
  .checkbox-list{
    width: 100%;
    text-align: left;
  }
  .row{
    margin-bottom: 16px;
  }

</style>
