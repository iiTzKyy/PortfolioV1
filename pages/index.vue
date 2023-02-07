<script setup>
const { data: posts } = await useAsyncData("posts", () =>
  queryContent("/project").find()
);
useHead({
  title: "Rizky Fs Portfolio Website",
  meta: [
    {
      hid: "title",
      name: "title",
      content: "RizkyFs Portfolio Website",
    },
    {
      hid: "description",
      name: "description",
      content: "This is my personal portfolio website",
    },
  ],
});
const spesiality = ref([
  {
    name: "HTML",
    years: "1 Years Experience",
  },
  {
    name: "CSS",
    years: "1 Years Experience",
  },
  {
    name: "Javascript",
    years: "1 Years Experience",
  },
  {
    name: "PHP",
    years: "1 Years Experience",
  },
  {
    name: "VueJS",
    years: "1 Years Experience",
  },
  {
    name: "Laravel",
    years: "1 Years Experience",
  },
]);
</script>

<template>
  <div>
    <section
      class="lg:mx-28 my-10 lg:grid lg:grid-cols-2 flex flex-col-reverse font-Lexend"
    >
      <head>
        <div class="text-center lg:text-left">
          <h1 class="lg:text-7xl mt-4 lg:mt-0 text-4xl font-semibold">
            Nice to meet you! <br class="lg:hidden" />
            I am <span class="underline">Rizky Febiginta S.</span>
          </h1>
          <p
            class="text-lg lg:my-10 my-4 lg:mx-0 mx-6 text-center lg:text-left"
          >
            Based in Indonesia, i am a front-end developer passionate about
            building accessible web apps that users love.
          </p>
          <a
            href="mailto:rizkyfebigintas@gmail.com"
            class="text-2xl font-medium mt-10 hover:bg-white hover:text-zinc-900 transition-all hover:border-solid duration-200 px-2 py-1 border-2 border-dashed"
            >Contact Me</a
          >
        </div>
      </head>
      <div class="relative z-10 mx-auto lg:mx-0">
        <img
          src="/img/aing.jpeg"
          alt=""
          class="lg:h-[540px] 2xl:h-[700px] h-80 lg:absolute lg:-translate-y-24 lg:right-0"
        />
      </div>
    </section>

    <!-- Break Line-->
    <div
      class="bg-zinc-800 dark:bg-zinc-50 py-px lg:mt-20 2xl:mt-80 lg:mx-28 mx-5"
    ></div>

    <section class="lg:mx-28 my-10 lg:grid lg:grid-cols-3 font-Lexend">
      <div v-for="item in spesiality" :key="item" class="text-center mb-10">
        <h2 class="text-4xl font-bold">{{ item.name }}</h2>
        <p class="">{{ item.years }}</p>
      </div>
    </section>
    <!-- Break Line-->
    <div class="bg-zinc-800 dark:bg-zinc-50 py-px lg:mx-28 mx-5"></div>
    <section class="lg:mx-28 my-10 font-Lexend">
      <div class="flex justify-between mx-5 lg:mx-0">
        <h3 class="lg:text-6xl text-3xl font-bold">Projects</h3>
      </div>
      <div>
        <Suspense>
          <div class="grid lg:grid-cols-2 gap-4 mt-20 mx-2">
            <div v-for="item in posts" :key="item">
              <div>
                <NuxtLink :to="item._path">
                  <div class="relative block group border-2">
                    <img
                      :src="item.image"
                      class="h-[250px] 2xl:h-[400px] w-full object-cover transition duration-500 group-hover:opacity-50"
                      alt="Project Picture"
                    />
                    <div
                      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 text-2xl font-bold text-white group-hover:opacity-100 transition-all group-hover:translate-y-0"
                    >
                      <p class="text-center font-lexend">
                        {{ item.title }}
                      </p>
                    </div>
                    <div
                      class="absolute inset-0 flex flex-col items-start justify-end p-6 opacity-0 translate-y-8 transform transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    ></div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </Suspense>
      </div>
    </section>
  </div>
</template>
