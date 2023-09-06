const app = Vue.createApp({
    template: `
    <h2>Başlık : {{baslik}}</h2>
    <h1>Konu : {{konu}}</h1>
    <p>Yorum sayısı: {{ySayisi}}</p>
    <button v-on:click="ekle()" >Ekle</button>
    <span>{{yazi}}</span>
    `,
    data() {
        return {
            baslik: 'Vue',
            konu: "Vue Dersi",
            ySayisi: 0,
            yazi: 'Yorum eklemek için tıklayın.'
        };
    },
    methods: {
        ekle() {
            console.log('ekle medtodu çalıştı');
            this.ySayisi++;
            this.yazi = '${this.ySayisi} tane yorum girildi.';
        }
    },
});

app.mount("#app");