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
        Software
      </h1>
    </div>
  </div>

  <div
    class="flex flex-row justify-items-stretch justify-center drop-shadow-2xl bg-emerald-50"
  >
    <div class="block px-20 my-auto max-w-xl xs:max-w-l drop-shadow-2xl">
      <h1
        class="font-sans font-medium 2xl:text-4xl sm:text-xl md:text-2xl text-black-50 text-left"
      >
        Software Installation
      </h1>
      <p class="py-4">
        1. Download the latest “seedener_x.x.x._armhf.img.gz” file
      </p>
      <button
        class="p-2 font-sans font-medium text-xs 2xl:text-base sm:text-xs md:text-xs text-neutral-50 bg-emerald-500 shadow-lg shadow-emerald-500/50 rounded-full hover:bg-emerald-500 drop-shadow-2xl"
      >
        <a
          href="https://github.com/MaximEdogawa/seedener/releases"
          target="_blank"
        >
          LAST RELEASE
        </a>
      </button>
      <p class="py-4">
        2. Unzip the “seedener_x.x.x._armhf.img.gz” file
      </p>
      <p class="py-4">
        3. Use the Balena Etcher or a similar tool to write the unzipped .img
        image file to a microsd card
      </p>
      <button
        class="p-2 font-sans font-medium text-xs 2xl:text-base sm:text-xs md:text-xs text-neutral-50 bg-emerald-500 shadow-lg shadow-emerald-500/50 rounded-full hover:bg-emerald-500 drop-shadow-2xl"
      >
        <a href="https://www.balena.io/etcher" target="_blank">
          BALENA ETCHER
        </a>
      </button>
      <p class="py-4">4. Install the microsd card in SeedSaver.</p>
      <p class="py-4">5. Install Smarthphone app:</p>

      <button
          class="p-2 font-sans font-medium text-xs 2xl:text-base sm:text-xs md:text-xs text-neutral-50 bg-emerald-500 shadow-lg shadow-emerald-500/50 rounded-full hover:bg-emerald-500 drop-shadow-2xl"
        >
          <a
            href="https://github.com/MaximEdogawa/seedsaver_wallet/releases"
            target="_blank"
          >
            APP RELEASE (ANDROID APK)
          </a>
        </button>

    </div>
    <div
      class="block max-w-xl xs:max-w-l border-transparent rounded-xl shadow drop-shadow-2xl"
    >
      <img class="rounded-t-lg" src="../assets/hardware_whave_share.jpg" />
    </div>
    
  </div>
  <div
    class="p-8 flex flex-row justify-items-stretch justify-evenly gap-2 drop-shadow-2xl text-center"
  >
    © 2023 SeedSaver: Air-gapped DIY Chia Signing Device and more. <br />
    Designed by MaximEdogawa.xch
  </div></template
>
<script setup lang="ts">
import backgroundUrl from "../assets/raspbeerypi_zero_banner.jpg";
</script>
