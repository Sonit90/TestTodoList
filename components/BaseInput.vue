<template>
  <input
    :value="value"
    @input="$emit('input',$event.target.value)"
    v-on:="$listeners">
</template>

<script>
  export default {
    name: 'BaseInput',
    props: {
      value: {
        type: [Number, String],
        default: null,
      },
    },

  }
</script>

<style scoped>
input{
  width: 100%;
  font-size: 16px;
}
</style>
