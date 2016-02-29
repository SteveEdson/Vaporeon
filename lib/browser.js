var Vue = require('vue');
var VueRouter = require('vue-router');
var VueAsyncData = require('vue-async-data');
var App = require('./components/app.vue');
var Task = require('./components/task.vue');


Vue.use(VueRouter);
Vue.use(VueAsyncData);

var Main = Vue.extend({
  replace: false,
  components: {
    'app': App
  }
});

var router = new VueRouter();

router.map({
    '/task/:task': {
        component: Task,
        name: 'task'
    }
});

router.start(Main, '.window');