<template>
  <button
    class="base-button"
    v-on="$listeners"><slot/></button>
</template>

<script>
  export default {
    name: 'BaseButton',
  }
</script>

<style lang="scss">
.base-button{
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  outline: 0;
  border: 0;
  vertical-align: middle;
  font-size: 14px;
  line-height: 1.215em;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  width: auto;
  height: auto;
  padding: 4px 16px;
  min-height: 2.572em;
  background: #1976d2;
  color: #fff;
  cursor: pointer;
  border-radius: 3px;
  &-small{
    padding: 2px 8px;
    font-size: 12px;
    height: 1.5em;
   }


}
</style>
