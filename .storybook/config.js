import { configure } from '@storybook/vue';

import Vue from 'vue';
//import Vuex from 'vuex'; // Vue plugins

// Import your custom components.
//import Mybutton from '../src/stories/Button.vue';
import HelloWorld from '../src/components/HelloWorld.vue';
import Simple from '../src/components/Simple.vue';

// Install Vue plugins.
//Vue.use(Vuex);

// Register custom components.
Vue.component('Simple', Simple);
Vue.component('HelloWorld', HelloWorld);

function loadStories() {
  // You can require as many stories as you need.
  require('../src/stories');
}

configure(loadStories, module);

