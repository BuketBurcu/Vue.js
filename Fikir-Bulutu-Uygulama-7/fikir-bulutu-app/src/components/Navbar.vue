<template>
  <div v-if="kullanici" class="nav">
    <router-link :to="{ name: 'Ekle' }">Fikir Ekle</router-link> |
    <router-link :to="{ name: 'Fikirler' }">Fikirler</router-link>
    <button @click="handleCikis">Çıkış Yap</button>
  </div>
  <div v-else class="nav">
    <router-link :to="{ name: 'Home' }">Anasayfa</router-link> |
    <router-link :to="{ name: 'Hakkimizda' }">Hakkımızda</router-link>
  </div>
</template>

<script>
import kullaniciGetir from "../composables/kullaniciGetir";
import cikisYap from "../composables/cikisYap";
import { useRouter } from "vue-router";
export default {
  setup() {
    const { kullanici } = kullaniciGetir();
    const { logout } = cikisYap();
    const router = useRouter();

    //Çıkış yapmak için kullanılan metot 1- çıkış yapar(logout) 2- / home'a yönlendirir.
    const handleCikis = async () => {
      await logout();
      router.push("/");
    };
    return { kullanici, handleCikis };
  },
};
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #ccc;
  margin: 0;
  background: #282828;
}
.nav {
  padding: 30px;
}
.nav a {
  font-weight: bold;
  color: #ccc;
  text-decoration: none;
}
.nav a.router-link-exact-active {
  color: #f78009;
}
button {
  border: 1px solid #f78009;
  border-radius: 10px;
  background-color: #f78009;
  padding: 7px;
  cursor: pointer;
  outline: none;
  margin-left: 15pxty;
}
</style>
