<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const showServices = ref(false)

const handleScroll = () => {
  const servicesSection = document.querySelector('.services-section')
  if (servicesSection) {
    const rect = servicesSection.getBoundingClientRect()
    showServices.value = rect.top < window.innerHeight * 1
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
  return () => window.removeEventListener('scroll', handleScroll)
})

const services = [
  {
    title: "Performance Optimization",
    description: "Improving load times, efficiency, and Core Web Vitals for better user experience."
  },
  {
    title: "Frontend Development",
    description: "Building responsive, interactive web apps with modern frameworks like React, Next.js, or Vue."
  },
  {
    title: "Code Reviewing",
    description: "Collaborating with various teams to improve code quality and share best practices."
  }
]
</script>

<template>
  <div class="services-section mt-[100px] px-[13px] md:px-[60px]  max-w-7xl mx-auto" id="services">
    <transition name="fade-slide" appear>
      <h2 v-if="showServices" class="text-center text-[24px] font-ovo font-regular">What i offer</h2>
    </transition>

    <transition name="fade-slide" appear>
      <h2 v-if="showServices" class="text-center text-5xl font-ovo font-regular mt-[18px]" style="transition-delay: 0.15s">
        My services
      </h2>
    </transition>

    <transition name="fade-slide" appear>
      <p v-if="showServices" class="mt-[18px] text-[20px] font-ovo font-regular text-[#565656] text-center" style="transition-delay: 0.3s">
        I am a Frontend engineer with 3 years of hands-on experience, currently interning <br> to grow my skills in the tech industry.
      </p>
    </transition>

    <transition-group name="fade-slide" appear tag="div" class="grid sm:grid-cols-2 lg:grid-cols-3 mt-[30px] max-lg:gap-[20px]">
      <div 
        v-if="showServices"
        v-for="(service, index) in services"
        :key="service.title"
        class="w-full sm:w-[330px] h-[330px] border-[1.5px] border-[#EFEFEF] rounded-[8px] flex flex-col items-start justify-center space-y-[20px] pl-[30px] pr-[20px]"
        :class="{'bg-[#FCF4FF] shadow-[3px_3px_3px_rgba(0,0,0,0.2)]': index === 1}"
        :style="`transition-delay: ${0.45 + (index * 0.15)}s`"
      >
        <img src="/world.png" alt="" class="w-[47px] h-[47px]">
        <h2 class="font-sans text-[23px] font-medium text-black">{{ service.title }}</h2>
        <p class="font-sans text-[16px] font-regular text-[#797979]">{{ service.description }}</p>
        <div class="flex items-center gap-[10px]">
          <p class="font-sans text-[16px] font-medium text-[#797979]">Read more</p>
          <img src="/read-more.png" alt="" class="w-[20px] h-[10px] text-[#7F7F7F]">
        </div>
      </div>
    </transition-group>
  </div>
</template>

<style scoped>
/* Reuse the same transition styles from your About component */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 1s ease;
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

