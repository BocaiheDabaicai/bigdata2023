<template>
  <div class="main">
    <div v-show="true" class="company"></div>
    <div v-show="true" class="leftTop">
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
    <div v-show="true" class="leftmid">
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
    <div v-show="true" class="leftbottom">
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
                <StorefrontSharp/>
              </n-icon>
              <text style="margin-left: 20%;">8231</text><br/>
              <div style="margin-top: -8%;">
                <text style="color: #bfc0c6;font-size: small">门店数量<span style="color: #9cc04c">(家)</span></text>
              </div>
            </div>
          </n-gi>
          <n-gi>
            <div class="leftbottomBox">
              <n-icon>
                <Car/>
              </n-icon>
              <text style="margin-left: 20%;">141</text><br/>
              <div style="margin-top: -8%;">
                <text style="color: #bfc0c6;font-size: small">配送奶车<span style="color: #9cc04c">(辆)</span></text>
              </div>
            </div>
          </n-gi>
          <n-gi>
            <div class="leftbottomBox">
              <n-icon>
                <Tv/>
              </n-icon>
              <text style="margin-left: 20%;">278</text><br/>
              <div style="margin-top: -8%;">
                <text style="color: #bfc0c6;font-size: small">互联网直播<span style="color: #9cc04c">(次)</span></text>
              </div>
            </div>
          </n-gi>
          <n-gi>
            <div class="leftbottomBox">
              <n-icon>
                <TrendingUp/>
              </n-icon>
              <text style="margin-left: 20%;">67%</text><br/>
              <div style="margin-top: -8%;">
                <text style="color: #bfc0c6;font-size: small">销售增长率<span style="color: #9cc04c">(%)</span></text>
              </div>
            </div>
          </n-gi>
          <n-gi>
            <div class="leftbottomBox">
              <n-icon>
                <ThumbsUp/>
              </n-icon>
              <text style="margin-left: 20%;">8991</text><br/>
              <div style="margin-top: -8%;">
                <text style="color: #bfc0c6;font-size: small">客户点赞<span style="color: #9cc04c">(次)</span></text>
              </div>
            </div>
          </n-gi>
          <n-gi>
            <div class="leftbottomBox">
              <n-icon>
                <Warning/>
              </n-icon>
              <text style="margin-left: 20%;">2</text><br/>
              <div style="margin-top: -8%;">
                <text style="color: #bfc0c6;font-size: small">客户投诉<span style="color: #9cc04c">(次)</span></text>
              </div>
            </div>
          </n-gi>
          <n-gi>
            <div class="leftbottomBox">
              <n-icon>
                <Reader/>
              </n-icon>
              <text style="margin-left: 20%;">271</text><br/>
              <div style="margin-top: -8%;">
                <text style="color: #bfc0c6;font-size: small">订单数量<span style="color: #9cc04c">(万)</span></text>
              </div>
            </div>
          </n-gi>
          <n-gi>
            <div class="leftbottomBox">
              <n-icon>
                <Newspaper/>
              </n-icon>
              <text style="margin-left: 20%;">58%</text><br/>
              <div style="margin-top: -8%;">
                <text style="color: #bfc0c6;font-size: small">订单增长率<span style="color: #9cc04c">(%)</span></text>
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
      <div class="menu">
        <n-dropdown trigger="hover" :options="options" @select="handleSelect">
          <n-button color="#12172a" style="color: #74ddc4" >菜单</n-button>
        </n-dropdown>
      </div>
      <div class="midMap" id="midMap"></div>
    </div>
    <div v-show="true" class="midbottom">
      <div class="iconHead">
        <n-icon>
          <BarChart/>
        </n-icon>
        <text style="margin-left: 7px">销售统计图</text>
      </div>
      <e-chart class="midstack" :option="testStack"/>
    </div>
    <div v-show="true" class="rightTop">
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
    <div v-show="true" class="rightmid">
      <div class="iconHead">
        <n-icon>
          <StatsChart/>
        </n-icon>
        <text style="margin-left: 7px">常低温占比分析</text>
      </div>
      <div class="rightmidProgress">
        <div class="rightmidProgressBody">
          <text>贵阳</text>
          <n-progress type="line" :percentage="60" :indicator-placement="'inside'" unit="%" processing :color="'#58a1d5'"/>
        </div>
        <div class="rightmidProgressBody">
          <text>遵义</text>
          <n-progress type="line" :percentage="52" :indicator-placement="'inside'" processing :color="'#64c1e3'"/>
        </div>
        <div class="rightmidProgressBody">
          <text>安顺</text>
          <n-progress type="line" :percentage="33" :indicator-placement="'inside'" processing :color="'#86dbe1'"/>
        </div>
        <div class="rightmidProgressBody">
          <text>铜仁</text>
          <n-progress type="line" :percentage="29" :indicator-placement="'inside'" processing :color="'#a1cfad'"/>
        </div>
        <div class="rightmidProgressBody">
          <div class="rightmidProgressBodyNumber">0</div>
          <div class="rightmidProgressBodyNumber">0.20</div>
          <div class="rightmidProgressBodyNumber">0.40</div>
          <div class="rightmidProgressBodyNumber">0.60</div>
          <div class="rightmidProgressBodyNumber">0.80</div>
          <div class="rightmidProgressBodyNumber">1.00</div>
        </div>
      </div>
      <n-divider>具体占比分析</n-divider>
      <div class="rightmidChart">
        <n-grid x-gap="12" :cols="3" style="width:80%;margin-bottom: 4%;margin-left: 2%">
          <n-gi>
            <div class="rightmidChartBody">
              <e-chart class="tempChart" :option="testTemp"></e-chart>
            </div>
          </n-gi>
          <n-gi>
            <n-divider vertical style="margin-left: 80%;height: 100%;"/>
          </n-gi>
          <n-gi>
            <div class="rightmidChartBody">
              <e-chart class="tempChart" :option="testTemp"></e-chart>
            </div>
          </n-gi>
        </n-grid>
      </div>

    </div>
    <div v-show="true" class="rightbottom">
      <div class="iconHead">
        <n-icon>
          <Analytics/>
        </n-icon>
        <text style="margin-left: 7px">常低温占比分析</text>
      </div>
      <e-chart class="sortChart" :option="testSort"></e-chart>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import useData from "../hooks/useData.js";
import useTable from "../hooks/useTable.js";
import usePie from "../hooks/usePie.js";
import useMenu from "../hooks/useMenu.js";
import useMap from "../hooks/useMap.js";
import useStack from "../hooks/useStack.js";
import useSort from "../hooks/sortHooks/useSort.js";
import useTemp from "../hooks/useTemp.js";
import {
  ThumbsUpSharp,Water,BagHandleSharp,AccessibilitySharp,
  PieChart,BarChart,LogoUsd,Wallet,Ribbon,Medal,StatsChart,
  Analytics,StorefrontSharp,TrendingUp,Tv,Warning,ThumbsUp,
  Reader,Car,Newspaper
} from '@vicons/ionicons5';
import '../style/viewsStyle/Salebigdata.css'

let testData1 = useData(1000,2000)
let testData2 = useData(5000,2000)
let testData3 = useData(9000,2000)

let testTable = useTable()

let testPie = usePie()

let {options,handleClick,handleSelect} = useMenu()

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