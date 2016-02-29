<style>
  .red {
    color: #f00;
  }
</style>

<template>
    This is a task
    {{ $route.params | json }}
</template>

<script>
  module.exports = {
    data: function () {
      return {

      }
    }
  }
</script>