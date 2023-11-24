<template>
  <div class="home">
    <div>
      <h1>Fikir Bulutu</h1>
      <transition appear @before-enter="beforeEnter" @enter="enter">
        <div>
          <p>Buluta fikir eklemek ve fikirleri görmek için giriş yapınız.</p>
          <button @click="handleGiris">Misafir Girişi</button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
// Homesayfamızda Misafi girişi kısmı olduğu için burrada giriş yapıyoruz.
import girisYap from "../composables/girisYap";
// Yönlendirme yapılacak yerlerde push gibi metodları kullanmak için eklenir.
import { useRouter } from "vue-router";
// animasyon için eklendi.
import gsap from "gsap;";
export default {
  name: "Home",
  components: {},
  setup() {
    //import edilen composable'ları burada bir tanımlıyoruz.
    const { login } = girisYap();
    const router = useRouter();

    const handleGiris = async () => {
      await login();
      router.push({ name: "Ekle" });
    };
    const beforeEnter = (el) => {
      el.style.transform = "translateY(200px)";
      el.style.opacity = 0;
    };
    const enter = (el, done) => {
      gsap.to(el, {
        duration: 2,
        y: 0,
        opacity: 1,
        ease: "back",
        onComplete: done,
      });
    };
    return { handleGiris, enter, beforeEnter };
  },
};
</script>
<style scope>
.button {
  background-color: #f78009;
  color: #ccc;
}
</style>
