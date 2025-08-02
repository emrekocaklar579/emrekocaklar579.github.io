<template>
  <nav class="bg-black text-white py-3 px-4 fixed w-full top-0 z-50">
    <div class="max-w-7xl mx-auto flex items-center justify-between mobile-menu-container">

      <div class="flex items-center space-x-3">
        <i class="fas fa-futbol text-green-400 text-xl"></i>
        <span class="text-lg font-bold text-green-400">SelçukSports</span>
      </div>

      <!-- Hamburger Menü Butonu -->
      <button 
        @click.stop="isOpen = !isOpen" 
        class="md:hidden text-white focus:outline-none p-2 rounded-md hover:bg-gray-800 transition-colors"
        aria-label="Menüyü aç/kapat"
      >
        <div class="w-6 h-6 flex flex-col justify-center items-center space-y-1">
          <span class="w-5 h-0.5 bg-white transition-all duration-300" :class="{ 'rotate-45 translate-y-1.5': isOpen }"></span>
          <span class="w-5 h-0.5 bg-white transition-all duration-300" :class="{ 'opacity-0': isOpen }"></span>
          <span class="w-5 h-0.5 bg-white transition-all duration-300" :class="{ '-rotate-45 -translate-y-1.5': isOpen }"></span>
        </div>
      </button>

      <!-- Desktop Menü -->
      <div class="hidden md:flex items-center space-x-6">
        <NuxtLink 
          to="/" 
          class="bg-green-500 text-white px-4 py-2 rounded-full text-sm hover:bg-green-600 transition-colors"
        >
          Canlı Yayınlar
        </NuxtLink>
        <a href="#" class="text-white hover:text-green-400 transition-colors">
          İletişim Kanalı
        </a>
      </div>

      <!-- Mobil Menü -->
      <div v-if="isOpen" class="absolute top-full left-0 right-0 bg-black border-t border-gray-800 md:hidden z-40">
        <div class="flex flex-col p-4 space-y-3">
          <NuxtLink 
            to="/" 
            @click="isOpen = false"
            class="bg-green-500 text-white px-4 py-2 rounded-full text-center text-sm hover:bg-green-600 transition-colors"
          >
            Canlı Yayınlar
          </NuxtLink>
          <a 
            href="#" 
            @click="isOpen = false"
            class="text-white hover:text-green-400 transition-colors text-center py-2"
          >
            İletişim Kanalı
          </a>
        </div>
      </div>

      
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)

const closeMenu = (event: Event) => {
  const target = event.target as Element
  if (!target.closest('.mobile-menu-container')) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeMenu)
})

onUnmounted(() => {
  document.removeEventListener('click', closeMenu)
})
</script>
