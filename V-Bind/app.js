const app = Vue.createApp({
    template: `
    <div v-bind: style="style">Deneme Yazısı</div>
    <div :style="style_two">Deneme Yazısı</div>`,
    data() {
        return {
            style: "color:green",
            style_two: "color:red"
        }
    },
    methods: {

    },

});
app.mount("#app");