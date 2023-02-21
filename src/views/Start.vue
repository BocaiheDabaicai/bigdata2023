<template>
  <div class="start">
    <div class="title">
      <n-gradient-text :size="48" type="info">
        南方乳业股份有限公司
      </n-gradient-text>
    </div>
    <div class="main">
      <n-list>
        <template #header/>
        <template #footer>
          <div class="footer">
            <h4 style="text-align: center">copyright @ NfryCompany</h4>
          </div>
        </template>
        <n-list-item>
          <n-grid cols="2" :x-gap="12" :y-gap="12" :collapsed-rows="2" responsive="screen">
            <n-gi>
              <n-button @click="transfer('salebigdata')">销售大数据</n-button>
            </n-gi>
            <n-gi>
              <n-button>牧场大数据</n-button>
            </n-gi>
            <n-gi>
              <n-button>xx大数据</n-button>
            </n-gi>
            <n-gi>
              <n-button>zz大数据</n-button>
            </n-gi>
          </n-grid>
        </n-list-item>
      </n-list>
    </div>

  </div>
</template>

<script setup>
import {useRouter} from 'vue-router'

const router = useRouter()

function transfer(position) {
  router.push({
    name:position
  })
}

</script>

<style scoped>
.title{
  text-align: center;
  padding-top: 3%;
  width: 100%;
  height: 20%;
}
.n-list{
  margin-top: 20px;
}
.n-button{
  width: 95%;
  height: 330px;
  margin-left: 2%;
  font-size: 32px;
  color: #30a4c7;
}
.start{
  width: 100%;
  -webkit-animation: fade-in-top 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  animation: fade-in-top 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}
@-webkit-keyframes fade-in-top {
  0% {
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-in-top {
  0% {
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
</style>