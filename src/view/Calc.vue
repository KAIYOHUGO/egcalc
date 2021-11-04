<template>
  <div class="grid grid-cols-4 grid-rows-6 gap-4 h-full p-10">
    <InputScreen class="col-span-4" :output="output">{{ input }}</InputScreen>
    <FloatButton @click="typechar('(')">(</FloatButton>
    <FloatButton @click="typechar(')')">)</FloatButton>
    <FloatButton @click="deletechar()">←</FloatButton>
    <FloatButton @click="cleanchar()">AC</FloatButton>
    <FloatButton @click="typechar('1')">1</FloatButton>
    <FloatButton @click="typechar('2')">2</FloatButton>
    <FloatButton @click="typechar('3')">3</FloatButton>
    <FloatButton @click="typechar('+')">+</FloatButton>
    <FloatButton @click="typechar('4')">4</FloatButton>
    <FloatButton @click="typechar('5')">5</FloatButton>
    <FloatButton @click="typechar('6')">6</FloatButton>
    <FloatButton @click="typechar('-')">-</FloatButton>
    <FloatButton @click="typechar('7')">7</FloatButton>
    <FloatButton @click="typechar('8')">8</FloatButton>
    <FloatButton @click="typechar('9')">9</FloatButton>
    <FloatButton @click="typechar('×')">×</FloatButton>
    <FloatButton @click="typechar('0')">0</FloatButton>
    <FloatButton @click="typechar('.')">.</FloatButton>
    <FloatButton @click="calc()">=</FloatButton>
    <FloatButton @click="typechar('÷')">÷</FloatButton>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import FloatButton from "@com/FloatButton.vue";
import InputScreen from "@com/InputScreen.vue";

const input = ref(""),
  output = ref("");

function typechar(c: string) {
  output.value = "";
  input.value += c;
}

function cleanchar(c: string) {
  output.value = "";
  input.value = "";
}

function deletechar(c: string) {
  if (!output.value) input.value = input.value.slice(0, -1);
  else output.value = "";
}

function calc() {
  try {
    output.value = String(
      eval(input.value.replace(/×/g, "*").replace(/÷/g, "/"))
    );
  } catch (_) {
    output.value = "NAN";
  }
}
</script>
<style lang="scss" scoped>
</style>