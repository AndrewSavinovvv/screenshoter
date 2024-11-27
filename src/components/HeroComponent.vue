<template>
  <div class="hero">
    <div class="hero__left">
      <h1 class="hero__left__title">Делайте снимки <br>
        и записывайте экран <br>
        <span class="highlight">в 1 клик</span>
      </h1>
      <p class="hero__left__text">Вместе со Screenshoter можно в один клик сделать снимок или записать происходящее на экране ПК,
        <br> чтобы поделиться с кем угодно</p>
      <ButtonComponent
          buttonText="Скачать бесплатно"
          class="hero__button"
      ></ButtonComponent>
      <button class="hero__left__title__down">
        <img src="@/assets/icons/down.svg" alt="">
      </button>
    </div>
    <div class="hero__right">
      <div class="hero__right__img">
        <img src="@/assets/img/img-hero.png" alt="">
      </div>
      <p class="hero__right__text">Бесплатная программа <br>
        для Windows</p>
    </div>
  </div>
</template>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  padding-top: 50px;
}

.hero__left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 50%;

}

.hero__right {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
}

.hero__left__title__down {
  border: none;
  background: none;
  cursor: pointer;
}
.hero__left__title {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 37px;
}
.hero__button {
  margin-bottom: 128px;
}
.highlight {
  background-image: url("@/assets/img/frame.png");
  color: #7421B0;
  padding: 0 8px;
}

.hero__left__text {
  color: #828282;
  font-size: 18px;
  font-weight: 400;
  line-height: 36px;
  margin-bottom: 80px;
}
.hero__right__img img {
  position: relative;
  z-index: 10;
  width: 600px;
}
.hero__right__text{
  position: absolute;
  color: white;
  font-size: 16px;
  font-weight: 400;
  border-radius: 10px;
  border: 1px solid #FFFFFF26;
  padding: 28px 50px;
  z-index: 10;
  top: 650px;
  right: 409px;
  backdrop-filter: blur(40px);
}

.hero__right__img::before {
  content: '';
  position: absolute;
  top: 110px;
  right: 0;
  width:740px;
  height: 736px;
  background: linear-gradient(#7421B0 0%, #D08EFF 100%);
  z-index: -1;
  border-radius: 70px;
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column-reverse;
    padding: 15px;
  }
  .hero__left__title {
    font-size: 24px;
    margin-bottom: 22px;
    margin-top: 60px;

  }
  .hero__left__text {
    font-size: 12px;
    margin-bottom: 22px;
  }
  .hero__left {
    align-items: center;
    text-align: center;
    margin-top: 60px;
    margin-right: 0;
    height: 0;
  }

  .hero__right {
    max-width: 100%;
    height: 340px;
    border-radius: 20px;
    margin-right: 0;
  }

  .hero__right::after {
    height: 250px;
    width:100%;
  }
  .hero__left__title__down{
    display: none;
  }
  .hero__right__img img {
    top: 37px;
    right: 10px;
    width: 583px;
    position: relative;
    z-index: 10;
  }
  .hero__right__img::before {
    height: 400px;
    top: 110px;
    right: -129px;
  }
  .hero__right__text {
    font-size: 12px;
    top: 438px;
    right: 240px;
    padding: 14px 24px;
    backdrop-filter: blur(20px);
  }
}
</style>

<script setup>
import ButtonComponent from "@/components/ButtonComponent.vue";
</script>