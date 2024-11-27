<script setup>

const props = defineProps({
  buttonText: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <button class="btn">
    <span>{{ props.buttonText }}</span>
  </button>
</template>

<style scoped>
.btn {
  color: white;
  background: linear-gradient(140deg, #7421B0 70%, #D08EFF 100%);
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  padding: 23px 41px;
  cursor: pointer;
  font-family: "Rubik", sans-serif;
}
</style>