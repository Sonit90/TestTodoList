<template>
  <select
    :value="value"
    @change="handleSelect">
    <option
      v-for="option in options"
      :key="option"
      :value="option">{{ option }}</option>
  </select>
</template>

<script>
  export default {
    name: 'BaseSelect',
    props: {
      options: {
        type: Array,
        default: ()=>[],
      },
      value:{
        type: String,
         default: 'null'
      }
    },
    methods: {
      handleSelect (e) {
        this.$emit('input', e.target.value)

      },
    },
  }
</script>

<style scoped>
  select{
    width: 100%;
    font-size: 16px;
  }

</style>
