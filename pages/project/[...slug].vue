<script setup>
const route = useRoute();

definePageMeta({
  layout: "detail",
});

const { data } = await useAsyncData(`content-${route.path}`, () =>
  queryContent().where({ _path: route.path }).findOne()
);
</script>
<template>
  <main class="xxl:mx-auto lg:mx-28 mx-4 mt-10">
    <header>
      <h1 class="text-4xl text-center font-Lexend font-bold mb-5">
        {{ data.title }}
      </h1>
      <article class="font-DM text-justify">
        <ContentRenderer :value="data" />
      </article>
    </header>
  </main>
</template>
