<template>
  <thead>
    <tr>
      <th
        :key="`header${col.label}`"
        v-for="col in cols">{{ col.label }}</th>
    </tr>
  </thead>
</template>

<script>
  export default {
    name: 'TableHeader',
    props: {
      cols: {
        type: Array,
        default: ()=>[],
      },
    },
  }
</script>

<style scoped>
  th{
    padding: 7px 16px;
    border-color: rgba(0,0,0,0.12);
    border-style: solid;
    border-width: 0;
    border-bottom-width: 1px;
  }
   thead{
     border-color: rgba(0,0,0,0.12);
   }
</style>
