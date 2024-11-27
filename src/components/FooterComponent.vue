<script setup>

</script>

<template>
   <footer class="footer">
     <div class="footer container">
       <div class="footer__logo">
         <img src="@/assets/img/logo.png" alt="">
       </div>
       <div class="footer__info__list">
         <div class="footer__info">
           <h2 class="footer__info__title">Продукт</h2>
           <ul class="footer__info__lists">
             <li>Функции</li>
             <li>Преимущества</li>
             <li>Как использовать</li>
           </ul>
         </div>
         <div class="footer__info">
           <h2 class="footer__info__title">Обратная связь</h2>
         </div>
         <div class="footer__info">
           <h2 class="footer__info__title">Политика <br>
             конфиденциальности</h2>
         </div>
       </div>
     </div>
   </footer>
</template>

<style scoped>
.footer {
  background: #FAFAFA;
}
.footer__logo{
  padding-top: 50px;
}
.footer__info {
  margin-top: 41px;
}
.footer__info__list{
  display: flex;
  justify-content: space-between;
}
.footer__info__lists {
  list-style: none;
  margin-top: 45px;
}
.footer__info__title{
  font-size: 18px;
  font-weight: 500;
}
.footer__info__lists li {
  color: #828282;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 400;
}
@media (max-width: 768px) {
  .footer {
    padding: 0 15px;
    padding-bottom: 30px;
  }
  .footer__info__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}
</style>