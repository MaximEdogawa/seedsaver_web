<template><div
    class="bg-fixed justify-center border-2 border-transparent rounded-xl"
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
  >
    <div
      class="p-10 grid justify-center bg-black bg-opacity-20 drop-shadow-2xl"
    >
      <h1
        class="font-sans font-medium 2xl:text-6xl sm:text-xl md:text-3xl text-neutral-50 text-center"
      >
        Explainers
      </h1>
    </div>
   
  </div>
  <div
      class="p-4 flex flex-row justify-items-stretch justify-evenly gap-2 drop-shadow-2xl"
    >
      <NavCard
        :image-number="2"
        headline="Full Installation"
        text="Want to maximize your trustlessness? Check out our manual build instructions to build from the source code."
        link-text="manual build"
        link-path="https://github.com/MaximEdogawa/seedener/blob/main/docs/manual_installation.md"
      ></NavCard>
    </div></template>

<script setup lang="ts">
import backgroundUrl from "../assets/raspbeerypi_zero_banner.jpg";
import NavCard from "../components/NavCard.vue";

</script>