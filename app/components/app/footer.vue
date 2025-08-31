<template>
    <footer class="mt-[30px] px-[13px] md:mx-[60px]  pb-[30px]  ">
        <div class=" flex justify-between items-center flex-wrap max-lg:justify-center max-lg:gap-[20px]">
        <h2 class="text-[18px] font-sans font-medium text-[#626262] max-lg:text-center">© 2025 Ikechukwu Dennis. All rights reserved.</h2>
        <div class="flex gap-[35px] items-center flex-wrap max-lg:justify-center">
             <h2 class="text-[18px] font-sans font-medium text-[#626262]">Terms of Services</h2>
              <h2 class="text-[18px] font-sans font-medium text-[#626262]">Privacy Policy</h2>
              <div class="flex items-center gap-3">
  <!-- LinkedIn -->
  <a 
    href="https://www.linkedin.com/in/ikechukwu-dennis-a17489259/" 
    target="_blank" 
    rel="noopener noreferrer"
    class="hover:opacity-70 transition"
  >
    <linkedin :size="27" />
  </a>

  <!-- GitHub -->
  <a 
    href="https://github.com/dennisikechukwu" 
    target="_blank" 
    rel="noopener noreferrer"
    class="hover:opacity-70 transition"
  >
    <Github :size="27" />
  </a>
</div>

        </div>
        </div>

    </footer>
</template>

<script setup>
    import { Linkedin } from 'lucide-vue-next';
    import { Github } from 'lucide-vue-next';
</script>