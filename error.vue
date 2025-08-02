<template>
  <div class="min-h-screen bg-[#0f1923] text-white flex items-center justify-center">
    <div class="text-center px-4">
      
      <div class="mb-8">
        <div class="text-8xl md:text-9xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
          404
        </div>
        <div class="text-xl md:text-2xl text-gray-300 mt-4">
          Sayfa Bulunamadı
        </div>
      </div>

      <div class="mb-8 max-w-md mx-auto">
        <h1 class="text-2xl md:text-3xl font-bold mb-4 text-white">
          Oops! Bir şeyler ters gitti
        </h1>
        <p class="text-gray-400 text-lg leading-relaxed">
          Aradığınız sayfa bulunamadı. Sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.
        </p>
      </div>

      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <NuxtLink 
          to="/"
          class="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
        >
          <i class="fas fa-home"></i>
          Ana Sayfaya Dön
        </NuxtLink>
        
        <button 
          @click="goBack"
          class="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
        >
          <i class="fas fa-arrow-left"></i>
          Geri Git
        </button>
      </div>

      <div class="mt-8 text-gray-500 text-sm">
        <p>Sorun devam ederse lütfen bizimle iletişime geçin.</p>
      </div>

      <div class="mt-12">
        <div class="flex justify-center items-center space-x-2">
          <div class="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
          <div class="w-3 h-3 bg-cyan-500 rounded-full animate-pulse" style="animation-delay: 0.2s;"></div>
          <div class="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style="animation-delay: 0.4s;"></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '404 - Sayfa Bulunamadı | SelçukSports',
  meta: [
    {
      name: 'description',
      content: 'Aradığınız sayfa bulunamadı. SelçukSports ana sayfasına dönün.'
    }
  ]
})

const goBack = () => {
  if (process.client) {
    window.history.back()
  }
}
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Custom pulse animation */
@keyframes customPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-pulse {
  animation: customPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
