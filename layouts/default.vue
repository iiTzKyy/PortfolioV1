<script setup>
const socialMedia = ref([
  {
    picture: "/svg/github.svg",
    alt: "github logos",
    link: "https://github.com/iiTzKyy",
  },
  {
    picture: "/svg/linkedin.svg",
    alt: "linkedin logos",
    link: "https://www.linkedin.com/in/rizky-fs/",
  },
  {
    picture: "/svg/twitter.svg",
    alt: "twitter logos",
    link: "",
  },
]);
</script>
<template>
  <div>
    <div class="lg:mx-28 my-5 text-xl lg:grid lg:grid-cols-2 font-Lexend">
      <div class="text-center lg:text-left lg:flex">
        <div>
          <NuxtLink to="/">
            <p class="hover-underline-animation font-Lexend font-bold text-2xl">
              OIKI<span class="font-thin text-sm">byRizky</span>
            </p>
          </NuxtLink>
        </div>
        <div class="self-center">
          <DarkMode class="lg:ml-5 hidden lg:block"></DarkMode>
        </div>
      </div>
      <div class="flex lg:justify-self-end justify-center lg:mr-3">
        <div v-for="item in socialMedia" :key="item" class="mx-2 z-20">
          <a :href="item.link" target="_blank">
            <img
              :src="item.picture"
              :alt="item.alt"
              class="h-8 lg:mx-0 mt-5 lg:mt-0"
            />
          </a>
        </div>
      </div>
    </div>
  </div>

  <slot />
</template>
