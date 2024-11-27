<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();


const screenshotText = 'снимок экрана';
const videoText = 'видео';
const shareText = 'поделиться';
const peopleText = "с кем угодно"
</script>

<template>
  <div class="info container">
    <div class="info__left">
      <h1 class="info__left__title">Встречайте — скриншоты и запись экрана <span class="info__left__title-text">
          2 в 1
        </span></h1>
    </div>
    <div class="info__right">
      <p class="info__right-text" v-html="t('info_text', { screenshot: screenshotText, video: videoText, share: shareText ,people: peopleText })"></p>

    </div>
  </div>
</template>

<style scoped>
.info {
  display: flex;
  gap: 139px;
  align-items: flex-start;
  padding-top: 400px;
}
.info__left {
  max-width: 473px;
}
.info__right {
  max-width: 570px;
}
.info__left__title {
  font-size: 34px;
  font-weight: 700;
  color: #131313;
}
.info__left__title-text {
  color: #7421B0;
}
.info__right-text {
  color: #828282;
  font-weight: 400;
  font-size: 18px;
  line-height: 36px;
}

@media (max-width: 768px) {
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding-right: 15px;
    padding-left: 15px;
  }
  .info__right-text {
    text-align: center;
  }
  .info__left__title {
    text-align: center;
  }
}
</style>