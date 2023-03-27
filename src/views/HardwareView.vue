<template
  ><div
    class="bg-fixed justify-center border-2 border-transparent rounded-xl"
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
  >
    <div
      class="p-10 grid justify-center bg-black bg-opacity-20 drop-shadow-2xl"
    >
      <h1
        class="font-sans font-medium 2xl:text-6xl sm:text-xl md:text-3xl text-neutral-50 text-center"
      >
        Hardware
      </h1>
    </div>
  </div>
  <div
    class="flex flex-row justify-items-stretch justify-center drop-shadow-2xl"
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
        THE ESSENTIALS
      </h1>
      <p class="py-4">1. Raspberry Pi Zero (version 1.3)</p>
      <p class="py-4">
        2. WaveShare 1.3 inch LCD hat with 240×240 pixel display
      </p>
      <p class="py-4">3. Pi Zero compatible camera module</p>
      <p class="py-4">4. MicroSD Card with at least 4GB capacity</p>
    </div>
  </div>
  <div
    class="flex flex-row justify-items-stretch justify-center drop-shadow-2xl bg-emerald-50"
  >
    <div class="block px-20 my-auto max-w-xl xs:max-w-l drop-shadow-2xl">
      <h1
        class="font-sans font-medium 2xl:text-4xl sm:text-xl md:text-2xl text-black-50 text-left"
      >
        Raspberry Pi Zero
      </h1>
      <p class="py-4">
        For a completely air-gapped solution, make sure to use the version 1.3
        with no WiFi or Bluetooth capability, but any Raspberry Pi 2/3/4 or Zero
        model will work.
      </p>
    </div>
    <div
      class="block max-w-xl xs:max-w-l border-transparent rounded-xl shadow drop-shadow-2xl"
    >
      <img class="rounded-t-lg" :src="hardware_raspberrypi_zero" />
    </div>
  </div>
  <div
    class="flex flex-row justify-items-stretch justify-center drop-shadow-2xl"
  >
    <div
      class="block max-w-xl xs:max-w-l border-transparent rounded-xl shadow drop-shadow-2xl"
    >
      <img class="rounded-t-lg" :src="hardware_camera" />
    </div>
    <div class="block px-20 my-auto max-w-xl xs:max-w-l drop-shadow-2xl">
      <h1
        class="font-sans font-medium 2xl:text-4xl sm:text-xl md:text-2xl text-black-50 text-left"
      >
        Raspberry Pi Camera
      </h1>
      <p class="py-4">
        Aokin / AuviPal 5MP 1080p with OV5647 Sensor Video Camera Module; other
        brands with the OV5647 sensor module should work as well, but may not be
        compatible with the Open Pill enclosure.
      </p>
      <p class="py-4 italic">
        <b>Note:</b> You will need to have a camera ribbon cable specifically
        compatible with Raspberry Pi Zero.
      </p>
    </div>
  </div>
  <div
    class="flex flex-row justify-items-stretch justify-center drop-shadow-2xl bg-emerald-50"
  >
    <div class="block px-20 my-auto max-w-xl xs:max-w-l drop-shadow-2xl">
      <h1
        class="font-sans font-medium 2xl:text-4xl sm:text-xl md:text-2xl text-black-50 text-left"
      >
        WaveShare LCD Hat
      </h1>
      <p class="py-4">
        Waveshare 1.3″ 240×240 pxl LCD
      </p>
      <p class="py-4 italic">
        <b>Note:</b> Choose the Waveshare screen carefully; make sure to
        purchase the model that has a resolution of 240×240 pixels.
      </p>
      <button
        class="p-2 font-sans font-medium text-xs 2xl:text-base sm:text-xs md:text-xs text-neutral-50 bg-emerald-500 shadow-lg shadow-emerald-500/50 rounded-full hover:bg-emerald-500 drop-shadow-2xl"
      >
        <a
          href="https://www.waveshare.com/wiki/1.3inch_LCD_HAT"
          target="_blank"
        >
          More Info
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
  </div>
</template>
<script setup lang="ts">
import backgroundUrl from "../assets/raspbeerypi_zero_banner.jpg";
import hardware_full from "../assets/hardware_full_components.jpg";
import hardware_raspberrypi_zero from "../assets/hardware_raspberrypi_zero.jpg";
import hardware_camera from "../assets/hardware_camera.jpg";
</script>
