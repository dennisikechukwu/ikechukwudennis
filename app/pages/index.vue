<!-- eslint-disable vue/html-self-closing -->

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const show = ref(false)

onMounted(() => {
    show.value = true
})
</script>

<template>
    <div class="mt-[60px] flex flex-col items-center px-[10px] md:px-[60px] space-y-6">
        <transition name="fade-slide" appear>
            <img v-if="show" src="/big.png" alt="" class="w-[170px] h-[170px] flex justify-center items-center"
                style="transition-delay: 0s" />
        </transition>

        <transition name="fade-slide" appear>
            <h2 v-if="show" class="sm:text-[21px] text-[25px] font-sans mt-[23px] h1" style="transition-delay: 0.15s">
                Hi! Im Ikechukwu Dennis 👋🏻
            </h2>
        </transition>

        <transition name="fade-slide" appear>
            <h2 v-if="show" class="text-center mt-[20px] text-3xl sm:text-4xl md:text-5xl font-ovo max-sm:font-extrabold"
                style=" transition-delay: 0.3s">
                frontend web engineer <br />
                based in Nigeria.
            </h2>
        </transition>

        <transition name="fade-slide" appear>
            <p v-if="show" class="text-center mt-[20px] text-[20px] leading-[40px] font-ovo text-[#565656]"
                style="transition-delay: 0.45s">
                I am a front-end engineer from Lagos, Nigeria, with 3 years of experience building responsive
                <br class="hidden md:block" />
                and scalable web applications.
            </p>
        </transition>


        <div class="mt-[20px] max-md:flex-col flex gap-[20px] items-center justify-center">

            <app-arrow />

            <a 
    href="/Resume.pdf" 
    download 
    target="_blank" 
    rel="noopener noreferrer"
  >
            <button
                class="flex justify-center items-center gap-2 border border-[#A7A7A7] px-[25px] py-[15px] rounded-full text-black text-[18px] font-ovo">
                My resume
                <img src="/download.png" alt="download" class="w-[14px] h-[16px]">
            </button>
            </a>
        </div>

       

    </div>
     <app-about/>
     <app-services/>
     <app-projects/>
     <app-connect/>
</template>

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
