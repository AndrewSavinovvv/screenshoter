<script setup>
import photo from "@/assets/img/cube.png"
import ButtonComponent from "@/components/ButtonComponent.vue";

const listItems = [
  {
    id: 1,
    imgSrc: photo,
    number: "01.",
    title: "Обмен идеями",
    paragraphs: [
      "Когда нужно что-то наглядно показать коллеге, исполнителю или заказчику — можно сделать снимок экрана и добавить к нему комментарий.",
      "А если ситуация требует более детального объяснения — окей, не проблема. Screenshoter поможет записать видео экрана вместе с вашими голосовыми комментариями.",
    ],
  },
  {
    id: 1,
    imgSrc: photo,
    number: "01.",
    title: "Обмен идеями",
    paragraphs: [
      "Когда нужно что-то наглядно показать коллеге, исполнителю или заказчику — можно сделать снимок экрана и добавить к нему комментарий.",
      "А если ситуация требует более детального объяснения — окей, не проблема. Screenshoter поможет записать видео экрана вместе с вашими голосовыми комментариями.",
    ],
  },
  {
    id: 1,
    imgSrc: photo,
    number: "01.",
    title: "Обмен идеями",
    paragraphs: [
      "Когда нужно что-то наглядно показать коллеге, исполнителю или заказчику — можно сделать снимок экрана и добавить к нему комментарий.",
      "А если ситуация требует более детального объяснения — окей, не проблема. Screenshoter поможет записать видео экрана вместе с вашими голосовыми комментариями.",
    ],
  },
];

</script>

<template>
  <div class="detail">
    <div class="detail__header">
      <h1 class="detail__header-title container">
        <span>Screenshoter</span> - это функции <br />
        на каждый день
      </h1>
    </div>
    <div class="detail__main container">
      <div class="detail__main-list" v-for="item in listItems" :key="item.id">
        <img :src="item.imgSrc" alt="" />
        <div class="detail__main-list__text">
          <span>{{ item.number }}</span>
          <h3>{{ item.title }}</h3>
        </div>
        <p class="paragraph" v-for="(paragraph, index) in item.paragraphs" :key="index">
          {{ paragraph }}
        </p>
      </div>
    </div>
    <div class="detail__header-second">
      <h1 class="detail__header-title container">
        Как использовать <span>Screenshoter</span>
      </h1>
    </div>
    <div class="detail__main container">
    <div class="detail__main-lists">
      <h1 class="detail__main-lists__title">
        Шаг 1.
      </h1>
    <div class="detail__main-lists__btn">
      <ButtonComponent
          buttonText="Скачать бесплатно"
          class="btns"
      ></ButtonComponent>
    </div>
      <p class="detail__main-lists__text">
        <span>Скачайте программу</span>
        на свой ПК или ноутбук
      </p>
    </div>
      <div class="detail__main-lists">
        <h1 class="detail__main-lists__title">
          Шаг 1.
        </h1>
        <div class="detail__main-lists__btn">
          <ButtonComponent
              buttonText="Скачать бесплатно"
              class="btns"
          ></ButtonComponent>
        </div>
        <p class="detail__main-lists__text">
          <span>Скачайте программу</span>
          на свой ПК или ноутбук
        </p>
      </div>
      <div class="detail__main-lists">
        <h1 class="detail__main-lists__title">
          Шаг 1.
        </h1>
        <div class="detail__main-lists__btn">
          <ButtonComponent
              buttonText="Скачать бесплатно"
              class="btns"
          ></ButtonComponent>
        </div>
        <p class="detail__main-lists__text">
          <span>Скачайте программу</span>
          на свой ПК или ноутбук
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail {
  background-image: url("@/assets/img/holo-bg.png");
  border-radius: 70px;
}
.detail__main{
  display: flex;
  gap: 80px;
}
.detail__header-second {
  margin-top: 200px;
}
.detail__header-title {
  font-size: 36px;
  font-weight: 700;
  line-height: 36px;
  color: #131313;
  margin-bottom: 101px;
}
.detail__header-title span {
  color: #7421B0;
}
.detail__main-list {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 400px;
}
.detail__main-list img {
  width: 110px;
}
.detail__main-list__text {
  display: flex;
  align-items: center;
  gap: 50px;
  margin-bottom: 60px;
  margin-top: 50px;
}
.detail__main-list__text span {
  font-size: 36px;
  font-weight: 700;
  color: #7421B0;
}
.detail__main-list__text h3 {
  font-size: 24px;
  color: #131313;
  font-weight: 500;
}
.detail__main-list p {
  font-size: 18px;
  color: #828282;
  margin-top: 10px;
  line-height: 24px;
}
.detail__main-lists__title {
  color: #7421B0;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 60px;
}
.detail__main-lists__btn {
  padding: 68px 80px;
  background: white;
  border-radius: 10px;
  margin-bottom: 40px;
}
.detail__main-lists__text {
  color: #828282;
  font-size: 18px;
  line-height: 32px;
}
.detail__main-lists__text span {
  color: #7421B0;
  font-weight: 500;
}
.btns {
  width: 235px;
}
@media (max-width: 1560px) {
  .detail,.detail__main {
    display: flex;
    flex-direction: column;
    padding: 16px;
    align-items: center;
    width: 100%;
  }
  .detail__header-title {
    text-align: center;
    font-size: 20px;
    margin-bottom: 30px;
  }
  .detail__main-lists__title {
    font-size: 20px;
    text-align: center;
    margin-bottom: 20px;
  }
  .detail__main-lists__btn {
    display: flex;
    justify-content: center;
    width: 345px;
  }
  .paragraph {
    text-align: center;
  }
  .detail__main-list__text,.detail__main-list  {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .detail__main-list__text span {
    font-size: 20px;
  }
  .detail__main-list__text h3 {
    font-size: 18px;
  }
}
</style>