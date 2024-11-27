<script setup>
import { ref } from 'vue';

const currentLang = ref('RU');
import arrowUpIcon from '@/assets/icons/arrow-up.svg';
import arrowDownIcon from '@/assets/icons/arrow-down.svg';

const showLangMenu = ref(false);


const changeLang = (lang) => {
  currentLang.value = lang;
  showLangMenu.value = false;
};
</script>

<template>
  <header class="header container">
    <img src="@/assets/img/logo.png" alt="Логотип">
    <div class="burger-menu">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <nav class="header__nav">
      <ul class="header__nav__list">
        <li><router-link :to="{ name: 'FeaturesView ' }">Функции</router-link></li>
        <li><router-link :to="{ name: 'BenefitsView ' }">Преимущества</router-link></li>
        <li><router-link :to="{ name: 'HowToUseView ' }">Как использовать</router-link></li>
        <li><router-link :to="{ name: 'FAQView ' }">Частые вопросы</router-link></li>
        <li class="header__lang" @click="showLangMenu = !showLangMenu">
          <span>{{ currentLang }}</span>
          <img :src="showLangMenu ? arrowDownIcon : arrowUpIcon" alt="Стрелка">
          <ul v-if="showLangMenu" class="lang-dropdown">
            <li @click="changeLang('RU')">RU</li>
            <li @click="changeLang('ENG')">ENG</li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  padding: 49px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__lang {
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
}
.header__lang span {
  margin-right: 6px;
}
.lang-dropdown {
  position: absolute;
  top: 100%;
  left: -50%;
  background: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  list-style: none;
  padding: 5px 0;
  margin: 5px 0 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 10;
  width: 81px;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
}

.lang-dropdown li:nth-child(1) {
  cursor: pointer;
  border-bottom: 1px solid #2626261A;
}
.lang-dropdown li {
  padding: 6px 11px;
  cursor: pointer;
}
.lang-dropdown li:hover {
  color: #56565680;
}

.header__nav__list {
  display: flex;
  align-items: center;
  list-style: none;
  gap: 60px;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
}
.header__nav__list li a, .header__nav__list li  {
  color: #565656;
  text-decoration: none;

}
.burger-menu {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.burger-menu span {
  display: block;
  height: 3px;
  background: #131313;
}
.burger-menu span:first-child {
  width: 15px;
  align-self: flex-end;
}

.burger-menu span:last-child {
  width: 10px;
  align-self: flex-end;
}
@media screen and (max-width: 1030px) {
  .header__nav {
    display: none;
  }

  .burger-menu {
    display: flex;
  }
  .header {
   padding: 26px 15px;
  }
}
</style>