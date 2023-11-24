<template>
  <div>
    <div class="fikirler">
      <input
        type="text"
        v-model="yenifikir"
        placeholder="Yeni Fikir Adı"
        @keypress="fikirEkle"
      />
      <ul>
        <transition-grup tag="ul" name="list" appear>
          <li
            v-for="fikir in fikirler"
            :key="fikir.id"
            @click="fikirSil(fikir.id)"
          >
            {{ fikir.fikirAd }}
          </li>
        </transition-grup>
      </ul>
    </div>
    <transition name="modal">
      <Modal v-if="modalGoster" />
    </transition>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import Modal from "../components/Modal.vue";
export default {};
</script>

<style></style>
