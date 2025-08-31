<template>
  <div class="projects-section mt-[100px] px-[13px] md:px-[60px] max-w-7xl mx-auto" id="projects">
    <!-- Headings -->
    <transition name="fade-slide" appear>
      <h2 v-if="showProjects" class="text-center text-[24px] font-ovo font-regular">
        My projects
      </h2>
    </transition>

    <transition name="fade-slide" appear>
      <h2 v-if="showProjects" class="text-center text-5xl font-ovo font-regular mt-[18px]"
        style="transition-delay: 0.15s">
        My latest works
      </h2>
    </transition>

    <transition name="fade-slide" appear>
      <p v-if="showProjects" class="mt-[18px] text-[20px] font-ovo font-regular text-[#565656] text-center"
        style="transition-delay: 0.3s">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing <br class="hidden sm:block" />
        my expertise in front-end development.
      </p>
    </transition>

    <!-- Projects Grid -->
    <transition-group name="fade-slide" appear tag="div"
      class="grid sm:grid-cols-2 lg:grid-cols-3 mt-[18px] gap-[20px] mx-auto">
      <!-- First 3 projects (always visible) -->
      <NuxtLink  :to="`/projects/${project.id}`" v-if="showProjects" v-for="project in projects.slice(0, 3)" :key="project.id"
        class="w-full sm:w-[330px] h-[250px] border-[1.5px]  border-[#EFEFEF] rounded-[8px] flex flex-col gap-6 items-start ">
        <img v-if="project.image" :src="project.image" alt="Project preview" class="object-cover rounded-t-md" />
        <div class="p-2">
          <p class="font-semibold text-[22px] font-ovo">{{ project.title }}</p>
          <p class="text-[16px] text-left font-ovo font-regular text-[#797979]">{{ project.description }}</p>
        </div>
      </NuxtLink>

      <!-- Extra projects (shown when toggled) -->
      <NuxtLink  :to="`/projects/${project.id}`" v-if="showProjects && showMore" v-for="project in projects.slice(3)" :key="project.id"
        class="w-full sm:w-[330px] h-[250px] border-[1.5px]  border-[#EFEFEF] rounded-[8px] flex flex-col gap-6 items-start ">
        <img v-if="project.image" :src="project.image" alt="Project preview" class="object-cover rounded-t-md" />
        <div class="p-2">
          <p class="font-semibold text-[22px] font-ovo">{{ project.title }}</p>
          <p class="text-[16px] text-left font-ovo font-regular text-[#797979]">{{ project.description }}</p>
        </div>
      </NuxtLink>
    </transition-group>

    <!-- Show More / Show Less Button -->
    <div v-if="showProjects" class="mt-[18px] flex justify-center items-center">
      <button @click="toggleMore"
        class="py-[20px] px-[40px] border rounded-full flex items-center justify-center gap-[10px] hover:bg-gray-100">
        <p class="font-sans text-[16px] font-medium text-[#797979]">
          {{ showMore ? "Show Less" : "Show More" }}
        </p>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const showProjects = ref(false);
const showMore = ref(false);

const handleScroll = () => {
  const projectsSection = document.querySelector(".projects-section");
  if (projectsSection) {
    const rect = projectsSection.getBoundingClientRect();
    showProjects.value = rect.top < window.innerHeight * 1;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
  return () => window.removeEventListener("scroll", handleScroll);
});

const projects = [
  {
    id: 1,
    title: "Watch Wave",
    image: "wave.png",
    description: "A video streaming site using YouTube API.",
  },
  {
    id: 2,
    title: "Endura Fit",
    image: "endura.png",
    description: "A fitness website with API integration.",
  },
  {
    id: 3,
    title: "Serrena",
    image: "serrena.png",
    description: "An e-commerce site for clothing.",
  },
  {
    id: 4,
    title: "Stellar",
    image: "stellar.png",
    description: "An API security landing page",
  },
  {
    id: 5,
    title: "Task Master",
    image: "task.png",
    description: "A simple to-do app.",
  },
];

const toggleMore = () => {
  showMore.value = !showMore.value;
};
</script>

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
