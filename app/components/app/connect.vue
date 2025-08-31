<template>
  <div class="contact-section mt-[100px] px-[13px] md:px-[60px] max-w-7xl mx-auto" id="connect">
    <transition name="fade-slide" appear>
      <h2 v-if="showSection" class="text-center text-[24px] font-ovo font-regular">Connect with me</h2>
    </transition>

    <transition name="fade-slide" appear>
      <h2 v-if="showSection" class="text-center text-5xl font-ovo font-regular mt-[18px]" style="transition-delay: 0.15s">
        Get in touch
      </h2>
    </transition>

    <transition name="fade-slide" appear>
      <p v-if="showSection" class="mt-[18px] text-[20px] font-ovo font-regular text-[#565656] text-center" style="transition-delay: 0.3s">
        I'd love to hear from you! If you have any questions, comments or <br class="hidden md:block">
        feedback, please use the form below.
      </p>
    </transition>

    <transition name="fade-slide" appear>
      <form v-if="showSection" @submit.prevent="handleSubmit" style="transition-delay: 0.45s">
        <div class="flex flex-col justify-center items-center mt-[30px] max-w-[727px] mx-auto">
          <div class="md:flex max-md:flex-col w-full items-center gap-[31px]">
            <transition name="fade-slide" appear>
              <input 
                v-if="showSection"
                type="text" 
                v-model="form.name"
                class="w-full md:w-[348px] h-[64px] border rounded-[8px] py-[18px] pl-[15px]" 
                placeholder="Enter your name"
                style="transition-delay: 0.6s"
                required
              >
            </transition>
            <transition name="fade-slide" appear>
              <input 
                v-if="showSection"
                type="email" 
                v-model="form.email"
                class="w-full md:w-[348px] h-[64px] border rounded-[8px] py-[18px] pl-[15px] max-md:mt-[30px]" 
                placeholder="Enter your email"
                style="transition-delay: 0.75s"
                required
              >
            </transition>
          </div>
          
          <transition name="fade-slide" appear>
            <textarea 
              v-if="showSection"
              v-model="form.message"
              class="w-full md:w-[727px] h-[215px] border rounded-[8px] mt-[30px] py-[18px] pl-[15px]" 
              placeholder="Enter your message"
              style="transition-delay: 0.9s"
              required
            ></textarea>
          </transition>
          
          <transition name="fade-slide" appear>
            <button 
              v-if="showSection"
              type="submit"
              class="mt-[30px] px-[40px] py-[20px] bg-[#202020] rounded-full flex items-center justify-center gap-[10px] hover:bg-[#333333] transition-colors"
              style="transition-delay: 0.5s"
            >
              <p class="font-sans text-[16px] font-medium text-white">Submit now</p>
              <img src="/read-more.png" alt="Submit arrow" class="w-[20px] h-[10px]">
            </button>
          </transition>

          <transition name="fade-slide" appear>
            <div 
              class="mt-[70px] flex items-center justify-center gap-[15px]" 
              v-if="showSection"  
              style="transition-delay: 0.6s"
            >
              <img src="/mail.png" alt="mail" class="w-[32px] h-[22px]">
              <a 
                href="mailto:Ikechukwudennis001@gmail.com" 
                class="font-sans text-[18px] font-medium text-[#797979] hover:underline"
              >
                Ikechukwudennis001@gmail.com
              </a>
            </div>
          </transition>
        </div>
      </form>
    </transition>
    <div class="w-full bg-[#969696] p-[1px] mt-[100px]"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';

const showSection = ref(false);
const form = reactive({
  name: '',
  email: '',
  message: ''
});

const handleScroll = () => {
  const section = document.querySelector('.contact-section');
  if (section) {
    const rect = section.getBoundingClientRect();
    showSection.value = rect.top < window.innerHeight * 1.3; 
  }
};

const handleSubmit = () => {
  const subject = encodeURIComponent(`Message from ${form.name}`);
  const body = encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
  );

  // Open default mail app with pre-filled details
  window.location.href = `mailto:Ikechukwudennis001@gmail.com?subject=${subject}&body=${body}`;

  // Reset form after submission
  form.name = '';
  form.email = '';
  form.message = '';
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); 
  return () => window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.8s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.transition-colors {
  transition: background-color 0.3s ease;
}
</style>
