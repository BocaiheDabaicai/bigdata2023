<script setup>
import themeOverrides from './style/theme.js'
</script>

<template>
    <n-config-provider :theme-overrides="themeOverrides">
      <n-message-provider>
        <router-view></router-view>
      </n-message-provider>
    </n-config-provider>
</template>

<style scoped>
</style>
