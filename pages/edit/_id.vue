<template>
  <div>
    <Card v-if="task">
      <div class="row">
        <BaseInput
          v-model="title"
          placeholder="Название задачи"/>
      </div>
      <div class="row">
        <BaseSelect
          :options="categories"
          v-model="category"/>
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
      @click="edit">
      Сохранить
      <span class="material-icons">
        keyboard_arrow_right
      </span>
    </BaseButton>
  </div>
</template>

<script>
  import { mapFields } from 'vuex-map-fields';
  import Card from '../../components/Card'
  import BaseButton from '../../components/BaseButton'
  import { mapMutations, mapGetters, mapState } from 'vuex'
  import BaseSelect from '../../components/BaseSelect'
  import BaseInput from '../../components/BaseInput'
  export default {
    name: 'EditTask',
    data () {
      return {
        id: this.$route.params.id,
      }
    },
    components: { BaseInput, BaseSelect, BaseButton, Card },
    computed: {
      ...mapState (['categories']),
      ...mapGetters(['getTask']),
      ...mapFields(['task']),
      ...mapFields({
        title: 'task.title',
        category: 'task.category',
      }),
    },
    mounted () {
      if(this.$route.params.id&&this.getTask(this.$route.params.id)){
        const tsk=this.getTask(this.$route.params.id)
        this.task = JSON.parse(JSON.stringify(tsk))
      }

    },
    methods: {
      ...mapMutations(['EDIT_TASK']),
      edit(){
        this.EDIT_TASK(this.task)
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
