<template>
  <div class="main">
    <div class="company"></div>
    <div class="leftTop">
      <div class="visionbox"></div>
      <n-row
        style="text-align: center"
      >
        <n-col :span="8">
          <n-statistic label="牛奶销售">
            <n-icon>
              <Water/>
            </n-icon>
            <n-number-animation :from="testData1[0]" :to="testData1[1]" :duration="1000"/>
          </n-statistic>
        </n-col>
        <n-col :span="8">
          <n-statistic label="销售次数">
            <n-icon>
              <ThumbsUpSharp/>
            </n-icon>
            <n-number-animation :from="testData2[0]" :to="testData2[1]" :duration="1000"/>
          </n-statistic>
        </n-col>
        <n-col :span="8">
          <n-statistic label="总体销量">
            <n-icon>
              <BagHandleSharp/>
            </n-icon>
            <n-number-animation :from="testData3[0]" :to="testData3[1]" :duration="1000"/>
          </n-statistic>
        </n-col>
      </n-row>
      <n-divider>公司发展计划</n-divider>
      <div class="timeLine">
        <n-timeline
            horizontal
            :icon-size="20">
          <n-timeline-item
              type="default"
              title="上市计划"
              content="即将上市"
              time="2023-02-15"
          />
          <n-timeline-item
              type="warning"
              title="全产业信息化"
              content="计划部署中"
              time="2023-03-01"
          />
          <n-timeline-item
              type="success"
              title="新销售计划"
              content="稳定运行中"
              time="2023-03-16"
          />
          <n-timeline-item
              type="success"
              title="信息化畜牧养殖"
              content="计划中"
              time="2023-03-26"
          />
          <n-timeline-item
              type="info"
              title="企业大发展"
              content="正在筹备"
              time="2023-04-03"
          />
        </n-timeline>
      </div>
    </div>
    <div class="leftmid">
      <div class="leftmiddetail">
        <n-gradient-text :size="14" color="#CBF7FF" style="font-weight: bold">
          客户榜单
        </n-gradient-text>
        <div class="table">
          <!--    280显示六行    -->
          <n-data-table
              :columns="testTable.columns"
              :data="testTable.data"
              :bordered="false"
              :pagination="testTable.pagination"
              :max-height="290"
          />
        </div>
      </div>

    </div>
    <div class="leftbottom">
      <e-chart class="leftPie" :option="testPie"></e-chart>
      <hr style="border: 1px solid #7F94DC;"/>
      <n-card class="leftbottomcard" title="销售区域排行">
        <span>第一名 : 贵阳<br/></span>
        <span>第二名 : 遵义<br/></span>
        <span>第三名 : 安顺<br/></span>
        <span>第四名 : 都匀<br/></span>
        <p style="margin-top: 40%">统计时间:2023年02月</p>
      </n-card>
    </div>
    <div class="mid">
<!--      <n-gradient-text :size="16" color="#CBF7FF">-->
<!--        实时大数据地图-->
<!--      </n-gradient-text>-->
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
    <div class="rightmid">
      <e-chart class="tempChart" :option="testTemp"></e-chart>
    </div>
    <div class="rightbottom">
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
import useTemp from "../hooks/useTemp.js";
import {ThumbsUpSharp,Water,BagHandleSharp } from '@vicons/ionicons5';
import '../style/viewsStyle/Salebigdata.css'

let testData1 = useData(1000,2000)
let testData2 = useData(5000,2000)
let testData3 = useData(9000,2000)

let testTable = useTable()

let testPie = usePie()

let testMap = useMap()

let testStack = useStack()

let testTemp = useTemp()

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