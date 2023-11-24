<template>
<div>
<Navbar>
  <div class="content">
    <router-view />
  </div>
  </Navbar>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default defineComponent({
  components:{Navbar}
  setup() {
    
  },
})
</script>


<style>
.content {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 20px;
}
</style>
