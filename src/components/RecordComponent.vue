<template>
  <div class="record">
    <div class="record__left">
      <div class="record__left-wrapper">
        <img class="record__left-img" src="@/assets/img/gif.png" alt="">
      </div>
    </div>
    <div class="record__right">
      <h1>Запись экрана</h1>
      <p>
        Недостаточно снимков? Запишите происходящее на экране со своим голосом или звуком системы.
      </p>
      <p>
        <span class="record__right-purple">Достаточно нажать две кнопки мыши</span>, выделить необходимую область и начнется запись видео
        с экрана. Быстро и без сложных настроек
      </p>
    </div>
  </div>
</template>

<style scoped>
.record {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 255px;

}

.record__left-wrapper {
  position: relative;
}

.record__left-wrapper::before {
  content: '';
  position: absolute;
  left: -400px;
  top: -70px;
  right: 0;
  width: 903px;
  height: 650px;
  background-image: url("@/assets/img/gif-hover.png");
  z-index: -1;
}

.record__left-img {
  display: block;
  position: relative;
}

.record__right {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.record__right-purple {
  color: #7421B0;
}

.record__right h1 {
  color: #131313;
  font-weight: 700;
  font-size: 36px;
}

.record__right p {
  font-size: 18px;
  font-weight: 400;
  color: #828282;
  line-height: 32px;
}
@media (max-width: 953px) {
  .record {
    display: flex;
    padding: 10px;
    flex-direction: column;
  }
  .record__right {
    text-align: center;
    gap: 20px;
  }
  .record__right h1{
    font-size: 20px;
  }
  .record__right p {
    font-size: 12px;
  }
  .record__left-wrapper::before {
    content: '';
    position: absolute;
    left: -181px;
    top: -14px;
    right: 0;
    width: 903px;
    height: 650px;
    background-image: url("@/assets/img/gif-hover.png");
    z-index: -1;
  }
}
</style>