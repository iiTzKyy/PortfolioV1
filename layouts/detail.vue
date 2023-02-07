<script setup></script>
<template>
  <div>
    <div class="lg:mx-28 my-5 text-xl lg:grid lg:grid-cols-2 font-Lexend">
      <div class="text-center lg:text-left lg:flex">
        <DarkMode class="my-auto lg:hidden"></DarkMode>
        <div>
          <NuxtLink to="/">
            <p class="hover-underline-animation font-Lexend font-bold text-2xl">
              OIKI<span class="font-thin text-sm">byRizky</span>
            </p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>

  <slot />
</template>
