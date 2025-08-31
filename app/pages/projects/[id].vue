<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.6s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>


<template>
  <section class="p-4  lg:p-6">
    <transition name="fade-slide" appear>
      <h1 class="text-[30px] text-center font-bold font-ovo"  style="transition-delay: 0s">{{ project.title }}</h1>
    </transition>
      <transition name="fade-slide" appear>
    <img v-if="project.image" :src="project.image" alt=""
      class=" w-[640px] sm:w-[750px] h-[280px] sm:h-[400px] mx-auto mt-[20px] border rounded-md" style="transition-delay: 0.15s" />
      </transition>
    <div class="flex max-sm:flex-col max-w-[750px] mx-auto mt-20 justify-between sm:items-center p-4 border rounded-md">
      <div class="flex flex-col items-start gap-5">
        <h2 class="text-[25px] font-ovo font-bold">Technologies Used</h2>
        <p class="font-ovo text-[18px]">{{ project.technology }}</p>
      </div>
      <div class="flex flex-col items-start gap-3 max-sm:mt-4">
        <h2 class="text-[25px] font-ovo font-bold">Link</h2>
        <a  :href="project.link" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-md flex justify-center items-center border gap-3 font-ovo text-[20px]">
          <p>View Live</p>
          <img src="/read-more.png" alt="" class="h-[13px] w-[20px]">
        </a>
      </div>
    </div>
    <div class=" max-w-[750px] mx-auto mt-20  p-4 border rounded-md text-[18px] font-ovo font-semibold">
      {{ project.description }}
    </div>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const projectId = parseInt(route.params.id)

const projects = [
  {
    id: 1,
    title: "Watch Wave",
    image: "/wave.png",
    desc: "A video streaming site using YouTube API.",
    description: "Watch Wave fetches and displays content from the YouTube API with a fast UI built on Vite.",
    technology: "React.js, YouTube API, Tailwind CSS, Vite, Material UI",
    link: "https://watch-waves.vercel.app/"
  },
  {
    id: 2,
    title: "Endura Fit",
    image: "/endura.png",
    desc: "A fitness website with API integration.",
    description: "Endura Fit helps users track workouts and find exercise routines. It integrates with RapidAPI to fetch real-time fitness data and tutorials.",
    technology: "React.js, Tailwind CSS, RapidAPI, Material UI",
    link: "https://endura-fit.vercel.app/",
  },
  {
    id: 3,
    title: "Serrena",
    image: "/serrena.png",
    desc: "An e-commerce site for clothing.",
    description: "Serrena is a React-powered e-commerce platform offering a seamless shopping experience.",
    technology: "React.js, Tailwind CSS",
    link: "https://serrenna.vercel.app/",
  },
  {
    id: 4,
    title: "Stellar",
    image: "/stellar.png",
    desc: "An API security landing page",
    description: "Stellar is a landing page that  works on all devices, so you only have to set it up once.",
    technology: "Next.js, Tailwind CSS",
    link: "https://stellar-beta-rust.vercel.app/",

  },
  {
    id: 5,
    title: "Task Master",
    image: "/task.png",
    desc: "A simple to-do app.",
    description: "Task Master is a to-do app that retains tasks even after refreshing using local storage.",
    technology: "React.js, Tailwind CSS, Local Storage",
    link:"https://task-masterrs.vercel.app/",
  },
];

const project = projects.find(p => p.id === projectId)

import { ref, onMounted } from 'vue'

const show = ref(false)

onMounted(() => {
  show.value = true
})
</script>
