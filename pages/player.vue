<template>
    <div style="margin: 0; padding: 0; background: #000; overflow: hidden; width: 100vw; height: 100vh;">
        <video 
            ref="player" 
            controls 
            autoplay 
            style="width: 100vw; height: 100vh; object-fit: contain;"
        >
        </video>
    </div>
</template>

<script setup lang="ts">
const player = ref<HTMLVideoElement | null>(null)

onMounted(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/hls.js@latest'
    script.onload = () => {
        const urlParams = new URLSearchParams(window.location.search)
        const link = urlParams.get('link')
        
        if (link && link.includes('.m3u8') && player.value) {
            // @ts-ignore - HLS global değişkeni
            if (typeof Hls !== 'undefined' && Hls.isSupported()) {
                // @ts-ignore
                const hls = new Hls()
                hls.loadSource(link)
                hls.attachMedia(player.value)
            } else if (player.value.canPlayType('application/vnd.apple.mpegurl')) {
                player.value.src = link
            }
        }
    }
    document.head.appendChild(script)
})
onUnmounted(() => {
    if (player.value) {
        player.value.pause()
        player.value.src = ''
    }
})
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}
</style>






