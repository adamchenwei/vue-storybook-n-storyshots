import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

// import HelloWorld from '../components/HelloWorld.vue';

// storiesOf('HelloWorld', module)
//   //.add('story as a template', () => '<my-button :rounded="true">story as a function template</my-button>')
//   .add('default', () => ({
//     components: { HelloWorld },
//     template: '<HelloWorld :rounded="true">rounded</HelloWorld>'
//   }));


  import Simple from '../components/Simple.vue';

storiesOf('Simple', module)
  //.add('story as a template', () => '<my-button :rounded="true">story as a function template</my-button>')
  .add('default', () => ({
    components: { Simple },
    template: '<Simple />'
  }));
