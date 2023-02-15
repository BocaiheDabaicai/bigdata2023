import { createApp } from 'vue'
import App from './App.vue'
import naive from './style/index.js'
import router from './router/index.js'
import ECharts from 'vue-echarts'
import './style/global.css'
import 'echarts'

// import chinaJson from "./style/map/China.json"
// import guizhouJson from "./style/map/GuiZhou.json"
/*注册地图组件
* 来源于:
*   http://datav.aliyun.com/portal/school/atlas/area_selector
* */
// echarts.registerMap('china',chinaJson)
// echarts.registerMap('guizhou',guizhouJson)

const app = createApp(App)

app.component('e-chart',ECharts)

app.use(naive)
app.use(router)
app.mount('#app')
