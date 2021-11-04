<template>
    <button class="block select-none shadow-2xl rounded bg-gray-200 w-full h-full transition-shadow active:shadow">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
});
</script>