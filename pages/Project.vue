<script setup>
const { data: posts } = await useAsyncData("posts", () =>
  queryContent("/project").find()
);
</script>

<template>
  <ul>
    <li v-for="post in posts" :key="post">
      <NuxtLink :to="post._path">
        {{ post.title }}
        {{ post.image }}
        <img :src="post.image" alt="" />
      </NuxtLink>
    </li>
  </ul>
</template>
