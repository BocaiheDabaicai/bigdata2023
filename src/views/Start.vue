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
              <n-button @click="transfer('pasturebigdata')">牧场大数据</n-button>
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
import '../style/viewsStyle/Start.css'

const router = useRouter()

function transfer(position) {
  router.push({
    name:position
  })
}

</script>

<style scoped>

</style>