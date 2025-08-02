export default defineEventHandler(async (event) => {

    let ads = [
        { id: "top-ads-1", image: 'https://hizliresims.com/728x90.gif', url: 'https://cutt.ly/lrSLHYBO' },
        { id: "top-ads-2", image: 'https://placehold.co/728x90/0076e3/fff?text=Reklam+alani+icin+tiklayiniz+top-ads-2', url: 'https://t.me/+8PM0i60BnFY0NjZk' },

        { id: "left-ads-1", image: 'https://placehold.co/146x296/0076e3/fff?text=Reklam%5Cnalani%5Cnicin%5Cntiklayiniz%5Cnads-banner3', url: 'https://t.me/+8PM0i60BnFY0NjZk' },
        { id: "left-ads-2", image: 'https://placehold.co/146x296/0076e3/fff?text=Reklam%5Cnalani%5Cnicin%5Cntiklayiniz%5Cnads-banner4', url: 'https://t.me/+8PM0i60BnFY0NjZk' },

        { id: "right-ads-1", image: 'https://placehold.co/146x296/0076e3/fff?text=Reklam%5Cnalani%5Cnicin%5Cntiklayiniz%5Cnads-banner5', url: 'https://t.me/+8PM0i60BnFY0NjZk' },
        { id: "right-ads-2", image: 'https://placehold.co/146x296/0076e3/fff?text=Reklam%5Cnalani%5Cnicin%5Cntiklayiniz%5Cnads-banner6', url: 'https://t.me/+8PM0i60BnFY0NjZk' },

        { id: "mobile-top-ads-1", image: 'https://placehold.co/150x30/0076e3/fff?text=Reklam+alani+icin+tiklayiniz', url: 'https://t.me/+8PM0i60BnFY0NjZk' },
        { id: "mobile-top-ads-2", image: 'https://hizliresims.com/350x90.gif', url: 'https://t.me/+8PM0i60BnFY0NjZk' },

        { id: "mobile-bottom-ads-1", image: 'https://placehold.co/150x30/0076e3/fff?text=Reklam+alani+icin+tiklayiniz', url: 'https://t.me/+8PM0i60BnFY0NjZk' },
        { id: "mobile-bottom-ads-2", image: 'https://placehold.co/150x30/0076e3/fff?text=Reklam+alani+icin+tiklayiniz', url: 'https://t.me/+8PM0i60BnFY0NjZk' },

        { id: "footer-ads-1", image: 'https://hizliresims.com/so8gvkc.gif', url: 'https://selcukiptv.com' },
        { id: "footer-ads-2", image: 'https://hizliresims.com/so8gvkc.gif', url: 'https://selcukiptv.com' },
    ]

    return {
        status: true,
        ads: ads
    }
});
