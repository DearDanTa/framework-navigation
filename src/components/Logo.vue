<template>
  <div class="logo-container" ref="logoContainerRef">
    <div class="logo-image">
      <img src="../assets/logo.png" alt=""/>
    </div>
    <h1 class="logo-text">{{ config.logoText }}</h1>
    <p class="logo-subtext">{{ config.logoSubtext }}</p>
    <hr/>
    <P class="daily-text">{{ dailyText }}</P>
    <p class="daily-text-author">-「{{ dailyTextAuthor }}」</p>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import axios from 'axios'
import {config} from "@/config";

const dailyText = ref('如何得与凉风约，不共尘沙一并来!')
const dailyTextAuthor = ref('中牟道中')
const logoContainerRef = ref<HTMLElement | undefined>();

onMounted(() => {
  const dom = logoContainerRef.value!.childNodes as NodeListOf<HTMLElement>
  dom.forEach((item: HTMLElement, index) => {
    item.className += ' no-animation'
    setTimeout(() => {
      item.className += ' animation'
    }, index * 200)
  })
})

const initDailyText = async () => {
  const res = await axios.get('https://v1.hitokoto.cn')
  dailyText.value = res.data.hitokoto
  dailyTextAuthor.value = res.data.from
}
initDailyText()
</script>

<style scoped lang="scss">
.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .logo-image {
    margin: 0 auto;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
  }

  .logo-text {
    color: #fff;
    font-size: 2.5em;
    font-family: 'Old English Text MT', "Engravers' Old English BT", 'Lato', 'PingFang SC',
    'Microsoft YaHei', sans-serif;
    margin-bottom: 10px;
  }

  .logo-subtext {
    font-weight: lighter;
    letter-spacing: 3px;
    color: #ccc;
    font-size: 1em;
    font-family: 'ff-tisa-web-pro-1', 'ff-tisa-web-pro-2', 'Lucida Grande', 'Hiragino Sans GB',
    'Hiragino Sans GB W3', 'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif;
    margin-bottom: 10px;
  }

  hr {
    width: 100%;
    margin: 20px auto;
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.14);
  }

  .daily-text {
    margin-bottom: 10px;
  }

  .daily-text-author {
    font-weight: bold;
  }
}
</style>
