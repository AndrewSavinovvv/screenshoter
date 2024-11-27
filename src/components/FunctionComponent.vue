<script setup>

</script>

<template>
  <div class="function container">
    <div class="function__blocks">
      <img src="@/assets/icons/puzzle.svg" alt="">
      <p class="function__blocks-text">Снимок и запись <br>
        экрана в 1 клик</p>
    </div>
    <div class="function__blocks">
      <img src="@/assets/icons/puzzle.svg" alt="">
      <p class="function__blocks-text">Снимок и запись <br>
        экрана в 1 клик</p>
    </div>
    <div class="function__blocks">
      <img src="@/assets/icons/puzzle.svg" alt="">
      <p class="function__blocks-text">Снимок и запись <br>
        экрана в 1 клик</p>
    </div>
    <div class="function__blocks">
      <img src="@/assets/icons/puzzle.svg" alt="">
      <p class="function__blocks-text">Снимок и запись <br>
        экрана в 1 клик</p>
    </div>
  </div>
</template>

<style scoped>
.function {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding-top: 60px;
}

.function__blocks-text {
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  color: #131313;
  margin-top: 40px;
}

.function__blocks {
  padding-top: 50px;
  padding-left: 60px;
  padding-bottom: 60px;
  padding-right: 40px;
  width: 338px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: background 0.3s ease, color 0.3s ease;
  border-radius: 10px;
}

.function__blocks:hover {
  background: #7421B0;
}

.function__blocks:hover .function__blocks-text {
  color: #fff;
}
@media (max-width: 840px) {
  .function {
    flex-direction: column;
    padding: 15px;
  }

  .function__blocks {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0;
    padding-bottom: 27px;
    padding-top: 27px;
    gap: 60px;
  }
  .function__blocks-text {
    margin-left: 60px;
    margin-top: 0;
  }
}
</style>