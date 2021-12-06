//创建vue项目
import { createApp } from 'vue'
//引入App.vue
import App from './App.vue'
//路由
import router from './router'
//vuex
import store from './store'
//全局注册文件
import register from './global'
//基础css文件  这个要安装 yarn add normalize
import 'normalize.css'
//修改样式
import '@/assets/css/index.css'
//保持vuex不会刷新就没了
import { setupStore } from './store'
//构造app
const app = createApp(App)
//重新运行就会调用setupStore
setupStore()
//使用vuex
app.use(store)
//install:获取当前path=>>匹配路径(当前动态路由为空,只有静态路由)=>>放在后面才能匹配到,放到前面只能匹配not-found
//注册动态路由(执行这个函数setupStore,动态路由有值)
//路由守卫(回调):能看到所有的路由,但是执行时早已经匹配好了(not-found)
app.use(router)
//全局注册
register(app)
//挂载 将app的内容挂载到public/index.html里面的#app上
app.mount('#app')
