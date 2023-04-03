<template>
  <div id="app">
    <div class="home-container" :style="{
      background: `url('${dailyBackgroundImage}') center center no-repeat #666`
    }">
      <div class="home-container-body">
        <LogoComponent/>
        <OperationComponent/>
      </div>
      <div class="home-container-body-overlay"></div>
      <a class="beian" href="https://beian.miit.gov.cn/" target="_blank" rel="nofollow">{{
          config.websiteFilingNumber
        }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import axios from 'axios'
import LogoComponent from './components/Logo.vue'
import OperationComponent from './components/Operation.vue'
import {config} from "@/config";

const dailyBackgroundImage = ref('')

const initDailyBackground = async () => {
  const res = await axios.get('https://api.xygeng.cn/bing/')
  dailyBackgroundImage.value = res.data.data.urls[0]
}
initDailyBackground()
</script>

<style lang="scss" scoped>
.home-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &-body {
    height: 100%;
    padding: 0 60px;
    color: #ccc;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &-body-overlay {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #000;
    z-index: 1;
    opacity: 0.55;
  }

  .beian {
    color: #ccc;
    z-index: 999;
    text-decoration: none;
    font-size: 12px;
    letter-spacing: 1px;
  }
}
</style>
