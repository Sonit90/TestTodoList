<template>
  <div>
    <Card>
      <div class="row">
        <BaseInput
          v-model="task.title"
          placeholder="Название задачи"/>
      </div>
      <div class="row">
        <BaseSelect
          :options="categories"
          v-model="task.category"/>
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
    <BaseButton
      class="base-button"
      @click="createTask">
      Создать
      <span class="material-icons">
        keyboard_arrow_right
      </span>
    </BaseButton>
  </div>
</template>

<script>

  import Card from '../components/Card'
  import BaseButton from '../components/BaseButton'
  import { mapMutations, mapState } from 'vuex'
  import BaseSelect from '../components/BaseSelect'
  import BaseInput from '../components/BaseInput'
  export default {
    name: 'AddTask',
    data () {
      return {
        task: {title:null, category:'Основные задачи', done: false,}
      }
    },
    components: { BaseInput, BaseSelect, BaseButton, Card },
    computed: {
      ...mapState (['categories'])
    },
    methods: {
      ...mapMutations(['ADD_TASK']),
      createTask(){
        this.ADD_TASK(this.task)
        this.$router.push({name:'index'})
      }
    },
  }
</script>

<style scoped>
  .row{
    margin-bottom: 16px;
  }


</style>
