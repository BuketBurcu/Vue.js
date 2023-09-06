const app = Vue.createApp({
    //template: `
    //<ul>
    //<li v-for="gun in gunler">{{gun}} </li>
    //</ul>
    // `,

    template: `
    <ul>
    <li v-for="person in persons">Çalışan: {{person.isim}} - Maaş: {{person.maas}} </li>
    </ul>
    `,
    data() {
        return {
            //gunler: ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]
            persons: [
                { isim: "Buket", maas: 35000 },
                { isim: "Burcu", maas: 40000 },
                { isim: "Mercan", maas: 60000 }]
        };
    },

    methods: {

    },
});
app.mount("#app");