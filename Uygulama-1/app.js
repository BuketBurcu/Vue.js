const app = Vue.createApp({
    template: `
    <h2>Frameworks</h2>
    <ul>
    <li v-for="f in frameworks" class="list" :class="{selected:f.selected}" @click="selectedTag(f.name)">  
    {{f.name}}  </li>
    </ul>

    <h3>Seçilen Frameworkler</h3>
    <ul>
    <li v-for="s in selectedTags">  
    {{s.name}}  </li>
    </ul>
    `,
    data() {
        return {
            frameworks: [
                { name: "Vue", selected: true },
                { name: "React", selected: false },
                { name: "Svelte", selected: false },
                { name: "Angular", selected: false },
            ]
        }
    },
    methods: {
        selectedTag(f) {
            f.selected = !f.selectedTags;
        }
    },
    computed: {
        selectedTags() {
            console.log("değişik oldu.");
            return this.selecteds = this.frameworks.filter(i => i.selected);
        }
    }
});
app.mount("#app");