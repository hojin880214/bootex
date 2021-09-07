import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'

createApp(App).use(router).mixin(mixins).mount('#app');

window.Kakao.init("3799bde93d1637c4ad4cf0dd147a44b2");