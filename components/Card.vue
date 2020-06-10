<template>
  <div
    class="card">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'Card',
  }
</script>

<style scoped lang="scss">
  .card{
    box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);
    border-radius: 4px;
    vertical-align: top;
    background: #fff;
    position: relative;
    margin-bottom: 16px;
    padding: 16px;
  }

</style>
