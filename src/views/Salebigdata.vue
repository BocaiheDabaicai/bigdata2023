<template>
  <div class="main">
    <div class="company"></div>
    <div class="leftTop">
      <div class="visionbox"></div>
      <n-row>
        <n-col :span="8">
          <n-statistic label="统计数据">
            <n-icon>
              <Time/>
            </n-icon>
            <n-number-animation :from="testData1[0]" :to="testData1[1]" :duration="1000"/>
          </n-statistic>
        </n-col>
        <n-col :span="8">
          <n-statistic label="活跃用户">
            <n-number-animation :from="testData2[0]" :to="testData2[1]" :duration="1000"/>
          </n-statistic>
        </n-col>
        <n-col :span="8">
          <n-statistic label="总体销量">
            <n-number-animation :from="testData3[0]" :to="testData3[1]" :duration="1000"/>
          </n-statistic>
        </n-col>
      </n-row>
    </div>
    <div class="leftmid">
      <n-gradient-text :size="28" color="#CBF7FF">
        客户榜单
      </n-gradient-text>
      <div class="table">
      <!--    280显示六行    -->
          <n-data-table
              :columns="testTable.columns"
              :data="testTable.data"
              :bordered="false"
              :pagination="testTable.pagination"
              :max-height="350"
          />
      </div>
    </div>
    <div class="leftbottom">
      <e-chart class="leftPie" :option="testPie"></e-chart>
    </div>
    <div class="mid">
      <n-gradient-text :size="16" color="#CBF7FF">
        实时大数据地图
      </n-gradient-text>
      <div class="midMap" id="midMap"></div>
    </div>
    <div class="midbottom">
      <e-chart class="midstack" :option="testStack"/>
    </div>
    <div class="rightTop">
      <n-grid x-gap="12" :cols="3">
        <n-gi>
          <h2 class="rightTopText">当前销售额</h2>
          <h3 class="rightTopScore"><n-number-animation :from="saleArray[0]" :to="saleArray[1]" :duration="1000"/></h3>
          <h3 class="rightTopText">最佳销售地区</h3>
          <h3 class="rightTopScore">贵阳</h3>
        </n-gi>
        <n-gi>
          <h2 class="rightTopText">目标销售额</h2>
          <h3 class="rightTopScore">{{ saleArray[2] }}</h3>
          <h3 class="rightTopText">最佳销量牛奶</h3>
          <h3 class="rightTopScore">利乐纯</h3>
        </n-gi>
        <n-gi>
          <h2 class="rightTopText">销售完成度</h2>
          <div class="score">
            <n-progress type="dashboard" gap-position="bottom" :percentage="arr" :color="'#60A2EA'"/>
          </div>
        </n-gi>
      </n-grid>
    </div>
    <div class="right">
      <e-chart class="sortChart" :option="testSort"></e-chart>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import useData from "../hooks/useData.js";
import useTable from "../hooks/useTable.js";
import usePie from "../hooks/usePie.js";
import useMap from "../hooks/useMap.js";
import useStack from "../hooks/useStack.js";
import useSort from "../hooks/sortHooks/useSort.js";
import {Time } from '@vicons/ionicons5';
import '../style/viewsStyle/Salebigdata.css'

let testData1 = useData(1000,2000)
let testData2 = useData(5000,2000)
let testData3 = useData(9000,2000)

let testTable = useTable()

let testPie = usePie()

let testMap = useMap()

let testStack = useStack()

let testSort = useSort()


let saleArray = ref([23,24,10000])
let arr = ref(0)
setInterval(()=>{
  saleArray.value[0] = saleArray.value[1]
  saleArray.value[1]+= Math.floor(Math.random()*10)
  arr.value = Math.round((saleArray.value[1]/saleArray.value[2])*10000)/100
},100)


</script>

<style scoped>

</style>