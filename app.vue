<template>
  <div class="h-screen mx-auto max-w-screen-2xl">
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>
<script setup></script>
<style>
html.dark {
  color-scheme: dark;
}

body {
  @apply bg-zinc-50 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-50;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
