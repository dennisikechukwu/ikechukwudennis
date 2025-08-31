<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const showAbout = ref(false)

const handleScroll = () => {
  const aboutSection = document.querySelector('.about-section')
  if (aboutSection) {
    const rect = aboutSection.getBoundingClientRect()
    // Trigger when 25% of the element is visible
    showAbout.value = rect.top < window.innerHeight * 1
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Initial check in case the section is already visible
  handleScroll()

  // Cleanup
  return () => window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="about-section mt-[100px] px-[13px] md:px-[60px] " id="about">
    <transition name="fade-slide" appear>
      <h2 v-if="showAbout" class="text-center text-[24px] font-ovo font-regular">Introduction</h2>
    </transition>

    <transition name="fade-slide" appear>
      <h2 v-if="showAbout" class="text-center text-5xl font-ovo font-regular mt-[18px]" style="transition-delay: 0.15s">
        About me
      </h2>
    </transition>

    <div class="mt-[50px] lg:flex max-lg:flex-col justify-center max-lg:mx-auto gap-[40px]">
      <transition name="fade-slide" appear>
        <div v-if="showAbout" class="flex max-lg:justify-center" style="transition-delay: 0.3s">
          <img src="/small.png" alt="" class="h-[470px] w-[400px] rounded-[30px]">
        </div>
      </transition>

      <transition name="fade-slide" appear>
        <div v-if="showAbout" class="lg:max-w-[700px] flex flex-col gap-[20px]" style="transition-delay: 0.45s">
          <p class="text-[18px] font-ovo font-regular text-[#565656] max-lg:mt-[20px]">
            I'm a frontend engineer with 3 years of experience building responsive modern web applications. I've had the opportunity to work with respected companies, helping create impactful digital solutions.
          </p>

          <transition-group name="fade-slide" appear>
            <div v-if="showAbout" key="skills1" class="grid sm:grid-cols-3 gap-[10px] mt-[10px]" style="transition-delay: 0.6s">
              <div class="sm:w-[200px] sm:h-[200px] lg:w-[200px] lg:h-[200px] w-full h-[200px] border-[1.5px] rounded-[8px] border-[#D8D8D8] shadow-[3px_3px_3px_rgba(0,0,0,0.2)] flex flex-col items-start justify-center pl-[16px]">
                <img src="/developer.png" alt="" class="w-[22px] h-[20px]">
                <p class="text-[20px] font-sans text-[#494949] font-medium mt-[15px]">Languages</p>
                <p class="mt-[15px] text-[15px] font-sans text-[#797979]">HTML, CSS, JavaScript React Js, Next Js, Vue Js, Typescript, Tailwind</p>
              </div>
              <div class="sm:w-[200px] sm:h-[200px] lg:w-[200px] lg:h-[200px] w-full h-[200px] border-[1.5px] rounded-[8px] border-[#D8D8D8]  flex flex-col items-start justify-center pl-[16px]">
                <img src="/school.png" alt="" class="w-[22px] h-[20px]">
                <p class="text-[20px] font-sans text-[#494949] font-medium mt-[15px]">Education</p>
                <p class="mt-[37px] text-[15px] font-sans text-[#797979]">Bachelors of Science in Mathematics</p>
              </div>
              <div class="sm:w-[200px] sm:h-[200px] lg:w-[200px] lg:h-[200px] w-full h-[200px] border-[1.5px] rounded-[8px] border-[#D8D8D8] flex flex-col items-start justify-center pl-[16px]">
                <img src="/briefcase.png" alt="" class="w-[22px] h-[20px]">
                <p class="text-[20px] font-sans text-[#494949] font-medium mt-[15px]">Projects</p>
                <p class="mt-[37px] text-[15px] font-sans text-[#797979]"> I have Built more than 5 
projects
</p>
              </div>
              <!-- Other skill boxes here -->
            </div>
          </transition-group>

          <transition name="fade-slide" appear>
            <div v-if="showAbout" class="mt-[10px] text-[20px] font-ovo font-medium text-[#868686]" style="transition-delay: 0.75s">
              Tools i use
            </div>
          </transition>

          <transition name="fade-slide" appear>
            <div v-if="showAbout" class="flex flex-wrap gap-[10px] items-center" style="transition-delay: 1.7s">
              <div class="w-[70px] h-[70px] border-[1.5px] rounded-md flex justify-center items-center">
                <img src="/figma.png" alt="" class="w-[33px] h-[33px]">
              </div>
              <div class="w-[70px] h-[70px] border-[1.5px] rounded-md flex justify-center items-center bg-black">
                <img src="/fig.jpg" alt="" class="w-[33px] h-[33px] ">
              </div>
              <div class="w-[70px] h-[70px] border-[1.5px] rounded-md flex justify-center items-center ">
                <img src="/github.jpg" alt="" class="w-[35px] h-[35px]">
              </div>
              <div class="w-[70px] h-[70px] border-[1.5px] rounded-md flex justify-center items-center bg-black">
                <img src="/vercel.jpg" alt="" class="w-[33px] h-[33px]">
              </div>
              <div class="w-[70px] h-[70px] border-[1.5px] rounded-md flex justify-center items-center">
                <img src="/npm.jpg" alt="" class="w-[37px] h-[33px]">
              </div>
              <div class="w-[70px] h-[70px] border-[1.5px] rounded-md flex justify-center items-center">
                <img src="/chat.jpg" alt="" class="w-[33px] h-[33px]">
              </div>
              <div class="w-[70px] h-[70px] border-[1.5px] rounded-md flex justify-center items-center">
                <img src="/chrome.jpg" alt="" class="w-[33px] h-[33px] rounded-full">
              </div>
              <!-- Other tool icons here -->
            </div>
          </transition>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
/* Keep your existing transition styles */
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