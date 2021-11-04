<template>
  <div class="shadow-lg bg-gray-200 rounded mb-4 flex items-center p-4">
    <h1 class="text-center object-contain text-xl" v-show="!props.output">
      <slot></slot>
    </h1>
    <h1 class="text-xl" v-show="props.output">
        = {{props.output}}
    </h1>
  </div>
</template>
<script lang="ts" setup>

const props=defineProps({
    output:String,
})

</script>