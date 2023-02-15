<script setup>
import themeOverrides from './style/theme.js'
</script>

<template>
    <n-config-provider :theme-overrides="themeOverrides">
      <router-view></router-view>
    </n-config-provider>
</template>

<style scoped>
</style>
