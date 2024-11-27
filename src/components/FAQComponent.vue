<script setup>
import { ref } from 'vue';

const faqItems = ref([
  { id: 1, question: 'Платная ли программа?', isOpen: false },
  { id: 2, question: 'Платная ли программа?', isOpen: false },
  { id: 3, question: 'Платная ли программа?', isOpen: false },
  { id: 4, question: 'Платная ли программа?', isOpen: false },
  { id: 5, question: 'Платная ли программа?', isOpen: false },
]);

const answerText =
    'Нет, Screenshoter абсолютно бесплатный. Вам не нужно платить за скачивание, установку или использование программы — все функции бесплатные.';

const toggleAnswer = (id) => {
  const item = faqItems.value.find((faq) => faq.id === id);
  if (item) {
    item.isOpen = !item.isOpen;
  }
};
</script>

<template>
  <div class="faq">
    <div class="faq__main container">
      <h1 class="faq__title">FAQ</h1>
      <div
          v-for="faq in faqItems"
          :key="faq.id"
          class="faq__content"
      >
        <div class="faq__content__number">{{ faq.id }}.</div>
        <p>{{ faq.question }}</p>
        <button class="faq__button" @click="toggleAnswer(faq.id)">
          <img
              v-if="!faq.isOpen"
              src="@/assets/icons/plus.svg"
              alt=""
          />
          <img
              v-else
              src="@/assets/icons/close.svg"
              alt="Крестик"
          />
        </button>
        <div v-if="faq.isOpen" class="faq__answer">{{ answerText }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.faq {
  background: #c2a6f10d;
}

.faq__title {
  text-align: center;
  padding-top: 100px;
  margin-bottom: 60px;
}

.faq__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(40px);
  border-radius: 30px;
  background: #c4c4c41a;
  padding: 52px;
  margin-bottom: 20px;
  position: relative;
  flex-wrap: wrap;
}

.faq__content__number {
  color: #7421b0;
  font-size: 36px;
  font-weight: 700;
}

.faq__content p {
  font-size: 24px;
  font-weight: 500;
  color: #131313;
}

.faq__button {
  background: none;
  border: none;
  cursor: pointer;
}

.faq__button img {
  width: 24px;
  height: 24px;
}

.faq__answer {
  margin-top: 10px;
  font-size: 18px !important;
  color: #828282 !important;
  text-align: start;
  font-weight: 400 !important;
  padding-left: 380px;
}
@media (max-width: 768px) {
  .faq__main {
   padding: 0 40px;
  }
  .faq__answer {
    padding: 0;
  }
  .faq__content p {
    font-size: 20px;
  }
  .faq__content {
    display: flex;
    align-items: center;
    padding: 20px;
  }
  .faq__answer {
    font-size: 14px !important;
    padding-left: 150px;
  }
}
</style>