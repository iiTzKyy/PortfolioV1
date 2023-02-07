<script setup>
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div>
    <button @click="toggleDark()">
      <img src="/svg/dark.svg" alt="" class="hidden dark:block" />
      <img src="/svg/light.svg" alt="" class="dark:hidden" />
    </button>
  </div>
</template>
