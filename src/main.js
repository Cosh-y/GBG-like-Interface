import { createApp } from 'vue'
import ViewUIPlus from 'view-ui-plus'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less'
import ganttastic from '@infectoone/vue-ganttastic'
import draggable from "vuedraggable"
// import './mock'

const app = createApp(App)

app.use(router)
  .use(store)
  .use(ViewUIPlus)
  .use(ganttastic)
  .mount('#app')
