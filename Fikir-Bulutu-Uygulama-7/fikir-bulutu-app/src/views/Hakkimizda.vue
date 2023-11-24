<template>
  <div class="hakkimizda">
    <transition appear name="fade" @after-enter="after">
      <h1>Hakkımızda</h1>
    </transition>
    <transition appear name="p1">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </transition>

    <transition appear name="p2">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </transition>
    <transition appear name="p3">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </transition>
  </div>
</template>
<script>
export default {
  name: "Hakkimizda",
  setup() {
    const after = (el) => {
      el.style.color = "#f78009";
    };
    return { after };
  },
};
</script>

<style scope>
.about {
  max-width: 600px;
  margin: 20px auto;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(-100px);
}
.fade-enter-to {
  opacity: 1;
  transform: translateY(0px);
}
.fade-enter-active {
  transition: all 3s ease;
}
.p1-enter-from {
  opacity: 0;
  transform: translateY(100px);
}
.p1-enter-to {
  opacity: 0.5;
  transform: translateY(0px);
}
.p1-enter-active {
  transition: opacity 2s ease-in;
  transition: transform 1s ease-out;
}
.p2-enter-from {
  opacity: 0;
  transform: translateY(150px);
}
.p2-enter-to {
  opacity: 0.5;
  transform: translateY(0px);
}
.p2-enter-active {
  transition: opacity 2s ease-in;
  transition: transform 1s ease-out;
}
.p3-enter-from {
  opacity: 0;
  transform: translateY(200px);
}
.p3-enter-to {
  opacity: 0.5;
  transform: translateY(0px);
}
.p3-enter-active {
  transition: opacity 2s ease-in;
  transition: transform 1s ease-out;
}
</style>
