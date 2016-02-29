<style>
  .red {
    color: #f00;
  }
</style>

<template>
  <div class="pane-group">
        <div class="pane sidebar">
            <div class="list-group-header">
              <input class="form-control" type="text" placeholder="Search for someone" v-model="search">
            </div>
          <ul class="list-group">
            <li class="list-group-item" v-link-active v-for="task in tasks | filterBy search">
                <a v-link="{ name: 'task', params: { 'task': task.id }, activeClass: 'active' }">
                  <img class="img-circle media-object pull-left" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97350&w=350&h=350" width="32" height="32">
                  <div class="media-body">
                    <strong>{{ task.title }}</strong>
                    <p>{{ task.body }}</p>
                  </div>
                  </a>
            </li>
          </ul>
        </div>
        <div class="pane">
            <router-view></router-view>
        </div>
      </div>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        msg: 'Hello world!',
        search: '',
        tasks: [
            {
                id: 123,
                title: 'Finish stuff',
                body: 'Get everything done'
            },
            {
                id: 999,
                title: 'Finish something else',
                body: 'Get everything done'
            }
        ]
      }
    }
  }
</script>