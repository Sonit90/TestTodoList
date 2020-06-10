<template>
  <div>
    <div class="row align-center">
      <h2 v-if="title">{{ title }}</h2>
      <div class="space"/>
      <slot name="top-after"/>
    </div>
    <table class="custom-table">
      <table-header :cols="columns"/>
      <tbody>
        <tr
          v-for="(row, index) in data"
          :key="`table-row${index}`">
          <td
            v-for="(cell, idx) in columns"
            :key="idx">
            <slot
              :name="cell.name"
              :cell="row[cell.name]"
              :row="row"
            >
              {{ row[cell.name] }}
          </slot></td>
        </tr>
      </tbody>

    </table>
  </div>
</template>

<script>
  import TableHeader from './TableHeader'
  export default {
    name: 'TodoTable',
    components: { TableHeader },
    props: {
      title: {
        type: String,
        default: ''
      },
      data: {
        type: Array,
        default: ()=>[],
      },
      columns:{
        type: Array,
        default: ()=>[],
      }
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
  .space{
    flex-grow: 1!important;
  }
  .custom-table{
    width: 100%;
    max-width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    color: #000;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);
    margin-bottom: 16px;

      tbody tr:not(:last-child) td{
        border-bottom-width: 1px;
      }
    td{
      padding: 7px 16px;
    }
    td, tr{
      border-color: rgba(0,0,0,0.12);
      border-style: solid;
      border-width: 0;
    }
  }
</style>
