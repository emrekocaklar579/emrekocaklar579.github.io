export default defineEventHandler(async (event) => {

    let channels = [
        { id: 1, name: 'Haber Türk FULL HD', url: 'https://www.youtube.com/embed/BlG2UDaVrIY'},
        { id: 2, name: 'TV8 FULL HD', url: 'https://example.com/tv8'},
        { id: 3, name: 'TV8.5 FULL HD', url: 'https://example.com/tv85'},
        { id: 4, name: 'Kanal D FULL HD', url: 'https://example.com/kanald' },
        { id: 5, name: 'TRT 1 FULL HD', url: 'https://example.com/trt1' },
        { id: 6, name: 'ATV FULL HD', url: 'https://example.com/atv' },
        { id: 7, name: 'Show TV FULL HD', url: 'https://example.com/showtv'},
        { id: 8, name: 'Star TV FULL HD', url: 'https://example.com/startv' },
        { id: 9, name: 'FOX TV FULL HD', url: 'https://example.com/foxtv' },
        { id: 10, name: 'TRT Spor FULL HD', url: 'https://example.com/trtspor' },
        { id: 11, name: 'beIN Sports 1 HD', url: 'https://example.com/beinsports1' },
        { id: 12, name: 'S Sport FULL HD', url: 'https://example.com/ssport' },
    ]

    return {
        status: true,
        channels: channels
    }
});
