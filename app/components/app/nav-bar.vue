


<template>
  <!-- Remove the outer container's relative positioning -->
  <div class="min-h-[30px]">
    <!-- Navigation Bar - Now properly fixed -->
    <nav class="fixed top-0 left-0 right-0 z-20  px-[30px] md:px-[60px] py-[10px] sm:py-[13px] bg-white/80 backdrop-blur-sm">
      <div class="max-w-[1300px] mx-auto flex items-center justify-between">
        
        <NuxtLink to="/" class="font-bold lg:text-[px] text-[25px] font-sans">< Dennis /></NuxtLink>
        
        <!-- Desktop Navigation -->
        <div class="px-[40px] py-[16px] bg-white/80 rounded-full gap-[40px] items-center shadow-sm font-ovo hidden lg:flex">
          <NuxtLink to="/"  class="hover:text-[#6B46C1] transition-colors">Home</NuxtLink>
          <NuxtLink to="/#about" class="hover:text-[#6B46C1] transition-colors">About me</NuxtLink>
          <NuxtLink to="/#services" class="hover:text-[#6B46C1] transition-colors">Services</NuxtLink>
          <NuxtLink to="/#projects" class="hover:text-[#6B46C1] transition-colors">My work</NuxtLink>
          <NuxtLink to="/#connect" class="hover:text-[#6B46C1] transition-colors">Connect</NuxtLink>
        </div>
        
        <!-- Right Side Actions -->
        <div class="flex gap-[17px] items-center">
          
          <a href="tel:+2349036907178"   class="hidden md:flex px-[30px] py-[15px] border border-[#4D4D4D] rounded-full items-center justify-center gap-[10px] hover:bg-black hover:text-white transition-colors">
            <p class="font-ovo">Contact</p>
            <img src="/arrow.png" alt="" class="w-[10px] h-[10px]">
          </a>
          <button class="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors" @click="toggleMenu">
            <Menu :size="32" />
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu (same as before) -->
    <transition name="fade">
      <div 
        v-if="isMenuOpen"
        class="fixed inset-0 bg-black/50 z-20"
        @click="toggleMenu"
      />
    </transition>

    <transition name="slide">
  <div 
    v-if="isMenuOpen"
    class="fixed top-0 right-0 h-full w-80 bg-white z-30 shadow-xl"
  >
    <div class="p-6 h-full flex flex-col">
      <div class="flex justify-end">
        <button class="p-2 rounded-full hover:bg-gray-100" @click="toggleMenu">
          <X :size="30" />
        </button>
      </div>
      
      <div class="flex flex-col gap-4 mt-10">
        <a 
          v-for="item in menuItems" 
          :key="item.text" 
          :href="item.href"
          class="text-xl font-ovo py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
          @click="toggleMenu"
        >
          {{ item.text }}
        </a>
      </div>
    </div>
  </div>
</transition>

    <!-- Add padding to the main content to account for fixed nav -->
    <div class="pt-[100px]">
      <!-- Your page content goes here -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Menu, X } from 'lucide-vue-next';
import { NuxtLink } from '#components';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : '';
};

const menuItems = [
  { text: 'Home', href: '#' },
  { text: 'About me', href: '#about' },
  { text: 'Services', href: '#services' },
  { text: 'My work', href: '#projects' },
  { text: 'Connect', href: '#connect' },
  { text: 'Contact',  href:"tel:+2349036907178"  },
];
</script>

<style scoped>
/* Keep your existing transition styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.transition-colors {
  transition: background-color 0.2s ease, color 0.2s ease;
}
</style>