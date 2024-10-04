<template>
  <div
    class="bg-fixed justify-center border-2 border-transparent rounded-xl"
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
  >
    <div
      class="p-10 grid justify-center bg-black bg-opacity-20 drop-shadow-2xl"
    >
      <h1
        class="font-sans font-medium 2xl:text-6xl sm:text-xl md:text-3xl text-neutral-50 text-center"
      >
        Donate
      </h1>
    </div>
  </div>
  <div
    class="p-20 flex flex-row justify-items-stretch justify-center drop-shadow-2xl"
  >
    <div
      class="block max-w-xl xs:max-w-l border-transparent rounded-xl shadow drop-shadow-2xl"
    >
      <img class="rounded-t-lg" :src="hardware_full" />
    </div>
    <div class="block px-20 my-auto max-w-xl xs:max-w-l drop-shadow-2xl">
      <h1
        class="font-sans font-medium 2xl:text-4xl sm:text-xl md:text-2xl text-black-50 text-left"
      >
        Donations to:
      </h1>
      <p class="py-4">
        MaximEdogawa.xch -
        did:chia:1w0hjc9aja50f0895f8lj3pfvxdcp3ngl0e0yk64lz3yw34js5mvstx2cnk
      </p>
      <p class="py-4">
        Chia Address:
        xch1dv8hyhpclwgsz74a7g5lrpad4u0qap55yekg4yq25uwkvvfzhegq7qz7u3
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import backgroundUrl from "@/assets/raspbeerypi_zero_banner.jpg";
import hardware_full from "@/assets/logo_main_big_black.jpg";
</script>
