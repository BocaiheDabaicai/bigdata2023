<template>
  <div class="main">
    <div class="company"></div>
    <div class="leftTop">
      <div class="visionbox"></div>
      <n-row
      >
        <n-col :span="8">
          <div class="leftTopNumber">
            <n-statistic label="牛奶销售">
              <n-icon>
                <Water/>
              </n-icon>
              <n-number-animation :from="testData1[0]" :to="testData1[1]" :duration="1000"/>
            </n-statistic>
          </div>
        </n-col>
        <n-col :span="8">
          <div class="leftTopNumber">
            <n-statistic label="销售次数">
              <n-icon>
                <ThumbsUpSharp/>
              </n-icon>
              <n-number-animation :from="testData2[0]" :to="testData2[1]" :duration="1000"/>
            </n-statistic>
          </div>
        </n-col>
        <n-col :span="8">
          <div class="leftTopNumber">
            <n-statistic label="总体销量">
              <n-icon>
                <BagHandleSharp/>
              </n-icon>
              <n-number-animation :from="testData3[0]" :to="testData3[1]" :duration="1000"/>
            </n-statistic>
          </div>
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
        <n-icon>
          <AccessibilitySharp/>
        </n-icon>
        <text>
          客户榜单
        </text>
      </div>

      <div class="table">
        <!--    280显示六行    -->
        <n-data-table
            :columns="testTable.columns"
            :data="testTable.data"
            :bordered="false"
            :pagination="testTable.pagination"
            :max-height="290"
            striped
        />
      </div>

    </div>
    <div class="leftbottom">
      <div class="iconHead">
        <n-icon>
          <PieChart/>
        </n-icon>
        <text style="margin-left: 7px">销售情况</text>
      </div>
      <div class="leftbottomBody">
        <e-chart class="leftPie" :option="testPie"></e-chart>
        <n-grid x-gap="12" :cols="2" style="width:70%;margin-bottom: 4%">
          <n-gi>
            <div class="leftbottomBox">
              <n-icon>
                <BagHandleSharp/>
              </n-icon>
              <text style="margin-left: 20%;">123</text><br/>
              <div style="margin-top: -8%;">
                <text style="color: #bfc0c6;font-size: small">正在完成中<span style="color: #9cc04c">(箱)</span></text>
              </div>
            </div>
          </n-gi>
          <n-gi>
            <div class="leftbottomBox">
              <n-icon>
                <BagHandleSharp/>
              </n-icon>
              <text style="margin-left: 20%;">123</text><br/>
              <div style="margin-top: -8%;">
                <text style="color: #bfc0c6;font-size: small">正在完成中<span style="color: #9cc04c">(箱)</span></text>
              </div>
            </div>
          </n-gi>
          <n-gi>
            <div class="leftbottomBox">
              <n-icon>
                <BagHandleSharp/>
              </n-icon>
              <text style="margin-left: 20%;">123</text><br/>
              <div style="margin-top: -8%;">
                <text style="color: #bfc0c6;font-size: small">正在完成中<span style="color: #9cc04c">(箱)</span></text>
              </div>
            </div>
          </n-gi>
          <n-gi>
            <div class="leftbottomBox">
              <n-icon>
                <BagHandleSharp/>
              </n-icon>
              <text style="margin-left: 20%;">123</text><br/>
              <div style="margin-top: -8%;">
                <text style="color: #bfc0c6;font-size: small">正在完成中<span style="color: #9cc04c">(箱)</span></text>
              </div>
            </div>
          </n-gi>
          <n-gi>
            <div class="leftbottomBox">
              <n-icon>
                <BagHandleSharp/>
              </n-icon>
              <text style="margin-left: 20%;">123</text><br/>
              <div style="margin-top: -8%;">
                <text style="color: #bfc0c6;font-size: small">正在完成中<span style="color: #9cc04c">(箱)</span></text>
              </div>
            </div>
          </n-gi>
          <n-gi>
            <div class="leftbottomBox">
              <n-icon>
                <BagHandleSharp/>
              </n-icon>
              <text style="margin-left: 20%;">123</text><br/>
              <div style="margin-top: -8%;">
                <text style="color: #bfc0c6;font-size: small">正在完成中<span style="color: #9cc04c">(箱)</span></text>
              </div>
            </div>
          </n-gi>
          <n-gi>
            <div class="leftbottomBox">
              <n-icon>
                <BagHandleSharp/>
              </n-icon>
              <text style="margin-left: 20%;">123</text><br/>
              <div style="margin-top: -8%;">
                <text style="color: #bfc0c6;font-size: small">正在完成中<span style="color: #9cc04c">(箱)</span></text>
              </div>
            </div>
          </n-gi>
          <n-gi>
            <div class="leftbottomBox">
              <n-icon>
                <BagHandleSharp/>
              </n-icon>
              <text style="margin-left: 20%;">123</text><br/>
              <div style="margin-top: -8%;">
                <text style="color: #bfc0c6;font-size: small">正在完成中<span style="color: #9cc04c">(箱)</span></text>
              </div>
            </div>
          </n-gi>
        </n-grid>
      </div>
    </div>
    <div class="mid">
<!--      <n-gradient-text :size="16" color="#CBF7FF">-->
<!--        实时大数据地图-->
<!--      </n-gradient-text>-->
      <div class="midMap" id="midMap"></div>
    </div>
    <div class="midbottom">
      <div class="iconHead">
        <n-icon>
          <BarChart/>
        </n-icon>
        <text style="margin-left: 7px">销售统计图</text>
      </div>
      <e-chart class="midstack" :option="testStack"/>
    </div>
    <div class="rightTop">
      <n-grid x-gap="12" :cols="3">
        <n-gi>
          <n-space :size="0">
            <div class="rightTopBox">
              <n-statistic label="当前销售额">
                <n-icon>
                  <LogoUsd/>
                </n-icon>
                <n-number-animation :from="saleArray[0]" :to="saleArray[1]" :duration="1000"/>
              </n-statistic>
            </div>
            <div class="rightTopBox">
              <n-statistic label="最佳销售地区">
                <n-icon>
                  <Medal/>
                </n-icon>
                <text>贵阳</text>
              </n-statistic>
            </div>
          </n-space>
        </n-gi>
        <n-gi>
          <n-space :size="0">
            <div class="rightTopBox">
              <n-statistic label="目标销售额">
                <n-icon>
                  <Wallet/>
                </n-icon>
                <text>{{ saleArray[2] }}</text>
              </n-statistic>
            </div>
            <div class="rightTopBox">
              <n-statistic label="最佳销量牛奶">
                <n-icon>
                  <Ribbon/>
                </n-icon>
                <text>利乐纯</text>
              </n-statistic>
            </div>
          </n-space>
        </n-gi>
        <n-gi>
          <div class="rightTopBoxProgess">
            <h2>销售完成度</h2>
            <n-progress type="circle" gap-position="bottom" :percentage="arr" :color="'#449ee0'"/>
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
import {ThumbsUpSharp,Water,BagHandleSharp,AccessibilitySharp,PieChart,BarChart,LogoUsd,Wallet,Ribbon,Medal } from '@vicons/ionicons5';
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