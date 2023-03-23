<template>
    <div
    class=" bg-fixed justify-center border-2 border-transparent rounded-xl"
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
  >
    <h1 class=" font-sans font-semibold 2xl:text-5xl sm:text-xl md:text-3xl text-neutral-50 text-center top-4 font- bg-emerald-600 bg-opacity-10 drop-shadow-2xl">
      Next Level <br>Custody Solution on Chia Network
    </h1>
  
    <div class="flex w-full h-full justify-center p-4 bg-emerald-600 bg-opacity-10">
      <div
        class="block max-w-3xl xs:max-w-l border-4 border-transparent rounded-xl shadow drop-shadow-2xl"
      >
        <img
          class="rounded-xl"
          src="../assets/logo_slogan_gray_small.gif"
          alt="Display"
        />
      </div>
    </div>    
</div>

  
</template>
<script setup lang="ts">
import backgroundUrl from "../assets/raspbeerypi_zero_banner.jpg";
</script>
