<template>
  <div class="min-h-screen bg-[#0f1923] text-white pt-16">
    <Navbar />
    
    <div class="w-full px-4 py-6">
      <div class="max-w-4xl mx-auto flex flex-col md:flex-row gap-6 justify-center">
        <img 
          id="top-ads-1"
          alt="Top ads 1" 
          class="w-full md:w-[70%] h-auto rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
        />
        <img 
          id="top-ads-2"
          alt="Top ads 2" 
          class="w-full md:w-[70%] h-auto rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
        />
      </div>
    </div>

    <div class="flex justify-center px-4 py-4">
      
      <div class="hidden 2xl:flex flex-col gap-4 mr-4 w-[150px] flex-shrink-0">
        <div class="rounded-lg overflow-hidden">
          <img 
            id="left-ads-1"
            alt="Left ads 1" 
            class="w-full h-[300px] object-cover cursor-pointer hover:opacity-90 transition-opacity"
          />
        </div>
        <div class="rounded-lg overflow-hidden">
          <img 
            id="left-ads-2"
            src="https://placehold.co/146x296/0076e3/fff?text=Reklam%5Cnalani%5Cnicin%5Cntiklayiniz%5Cnads-banner2" 
            alt="Left ads 2" 
            class="w-full h-[300px] object-cover cursor-pointer hover:opacity-90 transition-opacity"
          />
        </div>
      </div>

      <div class="w-full max-w-6xl">
        <div class="bg-gradient-to-br from-[#1a2c38] to-[#161f29] rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 shadow-xl">
          
          <h1 class="title text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent text-center">
            SelçukSports: Güncel Giriş Adresi
          </h1>
          
          <p class="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 text-center px-2">
            Futbolun ve tüm spor karşılaşmalarının heyecanını HD kalitede, kesintisiz izlemek ister misiniz? 
            SelçukSports doğru adresiniz! Artık en sevdiğiniz takımların mücadelelerini, kritik anları ve 
            unutulmaz golleri anında ekranlarınıza taşıyoruz. Selcuksports ile artık tek bir golü veya kritik 
            sayıyı kaçırmak zorunda değilsiniz. Aradığınız kesintisiz selçuksports keyfi burada! Eski selcuk 
            sports veya selcuksportshd arayışına son, modern ve güvenilir yayınlar için doğru yerdesiniz.
          </p>

          <div class="block lg:hidden mb-4 space-y-3">
            <img 
              id="mobile-top-ads-1"
              src="https://placehold.co/728x90/0076e3/fff?text=Mobil%5CnBanner%5Cn1" 
              alt="Mobil Banner 1" 
              class="w-full h-[80px] object-cover cursor-pointer hover:opacity-90 transition-opacity rounded-lg"
            />
            <img 
              id="mobile-top-ads-2"
              src="https://placehold.co/728x90/0076e3/fff?text=Mobil%5CnBanner%5Cn2" 
              alt="Mobil Banner 2" 
              class="w-full h-[80px] object-cover cursor-pointer hover:opacity-90 transition-opacity rounded-lg"
            />
          </div>

          <div class="hidden lg:flex justify-end mb-4">
            <button 
              @click="toggleChat"
              class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
            >
              <i :class="isChatOpen ? 'fas fa-times' : 'fas fa-comments'"></i>
              {{ isChatOpen ? 'Chat Kapat' : 'Chat Aç' }}
            </button>
          </div>

          <div class="flex flex-col lg:flex-row gap-4 lg:gap-6 mt-6 lg:mt-8">

            <div class="w-full bg-[#1a2c38] rounded-lg overflow-hidden" :class="isChatOpen ? 'lg:w-[70%]' : 'lg:w-full'">
              <div class="aspect-video w-full bg-black relative">
                <iframe 
                  ref="playerFrame"
                  class="w-full h-full"
                  src="about:blank"
                  frameborder="0"
                  allowfullscreen
                  style="background: #000;"
                ></iframe>
              </div>
            </div>

            <div 
              v-if="isChatOpen"
              class="hidden lg:block w-full lg:w-[30%] bg-[#1a2c38] rounded-lg overflow-hidden flex flex-col h-[300px] lg:h-auto"
            >
              <iframe 
                src="https://chat.selcuksports2.com" 
                class="w-full h-full" 
                style="border: none;"
              ></iframe>
            </div>
          </div>

          <div class="block lg:hidden mt-4 space-y-3">
            <img 
              id="mobile-bottom-ads-1"
              src="https://placehold.co/728x90/0076e3/fff?text=Mobil%5CnBanner%5Cn3" 
              alt="Mobil Banner 3" 
              class="w-full h-[80px] object-cover cursor-pointer hover:opacity-90 transition-opacity rounded-lg"
            />
            <img 
              id="mobile-bottom-ads-2"
              src="https://placehold.co/728x90/0076e3/fff?text=Mobil%5CnBanner%5Cn4" 
              alt="Mobil Banner 4" 
              class="w-full h-[80px] object-cover cursor-pointer hover:opacity-90 transition-opacity rounded-lg"
            />
          </div>

          <div class="block lg:hidden mt-4 bg-[#1a2c38] rounded-lg overflow-hidden h-[300px]">
            <iframe 
              src="https://chat.selcuksports2.com" 
              class="w-full h-full" 
              style="border: none;"
            ></iframe>
          </div>

          <div class="mt-6 lg:mt-8">
              <div class="flex items-center gap-4 mb-4">
                <i class="fas fa-list text-emerald-400 text-xl"></i>
                <h3 class="text-emerald-400 font-bold text-lg">
                  Maç Kanalları Listesi (Kesintisiz Yayınlar)
                </h3>
              </div>
              
              <div class="max-h-80 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-emerald-500 scrollbar-track-gray-700">
                <div 
                  v-for="channel in channels" 
                  :key="channel.id"
                  @click="selectChannel(channel.url)"
                  class="flex items-center justify-between bg-[#0f1923] hover:bg-[#1a2f3a] p-4 rounded-lg cursor-pointer transition-all duration-200 border border-gray-700 hover:border-emerald-500 group"
                >
                  <div class="flex items-center gap-4">
                    <div class="w-3 h-3 bg-emerald-500 rounded-full flex-shrink-0"></div>
                    <div>
                      <div class="text-white font-semibold group-hover:text-emerald-400 transition-colors">
                        {{ channel.name }}
                      </div>
                    </div>
                  </div>
                  
                  <div class="flex items-center gap-2">
                    <span class="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                      CANLI
                    </span>
                    <i class="fas fa-play text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  </div>
                </div>
              </div>
          </div>

        </div>
      </div>

      <div class="hidden 2xl:flex flex-col gap-4 ml-4 w-[150px] flex-shrink-0">
        <div class="rounded-lg overflow-hidden">
          <img 
            id="right-ads-1"
            alt="Right ads 1" 
            class="w-full h-[300px] object-cover cursor-pointer hover:opacity-90 transition-opacity"
          />
        </div>
        <div class="rounded-lg overflow-hidden">
          <img 
            id="right-ads-2"
            alt="Right ads 2" 
            class="w-full h-[300px] object-cover cursor-pointer hover:opacity-90 transition-opacity"
          />
        </div>
      </div>

    </div>


    <div class="h-8 sm:h-16"></div>

    <div class="fixed bottom-0 left-0 w-full z-50 bg-[#0f1923] border-t border-gray-700">
      <div class="max-w-6xl mx-auto px-4 py-2">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
          <img 
            id="footer-ads-1"
            alt="Footer ads 1" 
            class="w-full h-[60px] md:h-[70px] object-contain cursor-pointer hover:opacity-90 transition-opacity rounded"
          />
          <img 
            id="footer-ads-2"
            alt="Footer ads 2" 
            class="w-full h-[60px] md:h-[70px] object-contain cursor-pointer hover:opacity-90 transition-opacity rounded"
          />
        </div>
      </div>
    </div>

    <div class="h-20 md:h-24"></div>

  </div>
</template>

<script setup lang="ts">
const playerFrame = ref<HTMLIFrameElement | null>(null)
const { data } = await useFetch<ChannelType>('/api/channel')
const channels = ref(data.value?.channels || [])

const isChatOpen = ref(true)

const toggleChat = () => {
  isChatOpen.value = !isChatOpen.value
}

const selectChannel = (channelUrl: string) => {
  if (playerFrame.value && channelUrl ) {
    if (channelUrl.includes('.m3u8')) {
      playerFrame.value.src = `/player?link=${encodeURIComponent(channelUrl)}`
    } else {
      playerFrame.value.src = channelUrl
    }
  }
}

const { data: adsData } = await useFetch<AdsType>('/api/ads')
const ads = ref(adsData.value?.ads || [])

const handleAdClick = (url: string) => {
  window.open(url, '_blank')
}

onMounted(() => {
  ads.value.forEach(ad => {
    const adElement = document.getElementById(ad.id)
    if (adElement) {
      const img = adElement as HTMLImageElement
      img.src = ad.image
      img.addEventListener('click', () => handleAdClick(ad.url))
    }
  })
})

</script>

<style scoped>
.title {
  line-height: 1.2;
  letter-spacing: -0.025em;
}

.scrollbar-thin::-webkit-scrollbar {
  width: 8px;
}

.scrollbar-thin::-webkit-scrollbar-track {
  background-color: #374151;
  border-radius: 4px;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background-color: #10b981;
  border-radius: 4px;
}

.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background-color: #059669;
}

.scrollbar-thin {
  scrollbar-width: thin;
  scrollbar-color: #10b981 #374151;
}

@media (max-width: 640px) {
  .title {
    font-size: 1.5rem;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .title {
    font-size: 2rem;
  }
}

@media (min-width: 1025px) {
  .title {
    font-size: 2.5rem;
  }
}
</style>