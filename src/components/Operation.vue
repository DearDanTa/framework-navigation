<template>
  <div class="operation-container" ref="operationContainerRef">
    <div class="operation-text">
      <p>{{ config.operationText }}</p>
    </div>
    <div class="operation-button">
      <p class="operation-button-item" v-for="(item, index) in config.buttonList" :key="index"
         @click="handleJump(item.url)">{{ item.name }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {config} from '@/config'

const operationContainerRef = ref<HTMLElement | undefined>()
onMounted(() => {
  const dom = operationContainerRef.value!.childNodes as NodeListOf<HTMLElement>
  dom.forEach((item: HTMLElement, index: number) => {
    item.className += ' no-animation'
    setTimeout(() => {
      item.className += ' animation'
    }, 1200 + index * 200)
  })
})
const handleJump = (url: string) => {
  window.open(url, '_blank')
}
</script>

<style scoped lang="scss">
.operation-container {
  margin-top: 30px;

  .operation-text {
    text-align: center;
    margin: 10px 0 30px;
  }

  .operation-button {
    display: flex;
    flex-wrap: wrap;

    &-item {
      min-width: 105px;
      height: 38px;
      box-sizing: border-box;
      cursor: pointer;
      color: #fff;
      opacity: 0.8;
      padding: 8px 20px;
      border: 1px solid #fff;
      border-radius: 20px;
      font-size: 0.9em;
      font-weight: bold;
      letter-spacing: 1px;
      text-align: center;
      margin: 5px 5px 0 5px;
    }
  }
}
</style>
