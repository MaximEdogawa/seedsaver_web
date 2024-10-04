<template>
  <div
    class="bg-fixed justify-center border-2 border-transparent rounded-xl"
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
  >
    <div class="flex w-full h-full justify-center p-4 bg-black bg-opacity-20">
      <div
        class="block max-w-3xl xs:max-w-l border-4 border-transparent rounded-xl shadow drop-shadow-2xl"
      >
        <img
          class="rounded-xl"
          src="@/assets/logo_slogan_gray_small.gif"
          alt="Display"
        />
      </div>
    </div>
    <div class="grid justify-center bg-black bg-opacity-20 drop-shadow-2xl">
      <h1
        class="font-sans font-semibold 2xl:text-5xl sm:text-xl md:text-3xl text-neutral-50 text-center"
      >
        Next Level <br />Custody Solution on Chia Network
      </h1>
      <div
        class="p-4 flex flex-row justify-items-stretch justify-evenly gap-2 drop-shadow-2xl"
      >
        <button
          class="p-2 font-sans font-bold text-xs 2xl:text-xl sm:text-xs md:text-xs text-neutral-50 border-2 border-emerald-500 shadow-lg shadow-emerald-500/50 rounded-full hover:bg-emerald-500 drop-shadow-2xl"
        >
          <a
            href="https://github.com/MaximEdogawa/seedener/releases"
            target="_blank"
          >
            DOWNLOAD THE LAST RELEASE
          </a>
        </button>
        <button
          class="p-2 font-sans font-bold text-xs 2xl:text-xl sm:text-xs md:text-xs text-neutral-50 border-2 border-emerald-500 shadow-lg shadow-emerald-500/50 rounded-full hover:bg-emerald-500 drop-shadow-2xl"
        >
          <a
            href="https://github.com/MaximEdogawa/seedener/blob/main/seedsaver_pubkey.gpg"
            target="_blank"
          >
            GPG PUB KEY
          </a>
        </button>
        <button
          class="p-2 font-sans font-bold text-xs 2xl:text-xl sm:text-xs md:text-xs text-neutral-50 border-2 border-emerald-500 shadow-lg shadow-emerald-500/50 rounded-full hover:bg-emerald-500 drop-shadow-2xl"
        >
          <a href="https://github.com/MaximEdogawa/seedener" target="_blank">
            VIEW THE PROJECT ON GITHUB
          </a>
        </button>
      </div>
    </div>
  </div>
  <div class="grid justify-center bg-white">
    <h1
      class="p-4 font-sans font-medium 2xl:text-4xl sm:text-xl md:text-3xl text-black-50 text-center drop-shadow-2xl"
    >
      BUILD YOUR OWN<br />CHIA SIGNING DEVICE
    </h1>
    <p
      class="p-4 font-sans font-semibold text-base text-black-50 text-center drop-shadow-2xl"
    >
      USING A RASPBERRY PI ZERO
    </p>
    <p
      class="font-sans font-medium 2xl:text-xl sm:text-base md:text-3xl text-gray-700 text-center drop-shadow-2xl"
    >
      You can build your own Hardware Wallet for Chia blockchain custody
      solution.
    </p>
    <p
      class="font-sans font-medium 2xl:text-xl sm:text-base md:text-3xl text-gray-700 text-center drop-shadow-2xl"
    >
      To generate keys and air-gapped sign spend bundles.
    </p>
    <div
      class="p-4 flex flex-row justify-items-stretch justify-evenly gap-2 drop-shadow-2xl"
    >
      <NavCard
        :image-number="1"
        headline="Quick Installation"
        text="The fastest and easiest way to run the latest version of SeedSaver - Sign is to download our most recent release."
        link-text="latest release"
        link-path="https://github.com/MaximEdogawa/seedener/releases"
      ></NavCard>
      <NavCard
        :image-number="2"
        headline="Full Installation"
        text="Want to maximize your trustlessness? Check out our manual build instructions to build from the source code."
        link-text="manual build"
        link-path="https://github.com/MaximEdogawa/seedener/blob/main/docs/manual_installation.md"
      ></NavCard>
      <NavCard
        :image-number="3"
        headline="Make Your Own Case"
        text="The Open Pill enclosure design is open source too! Print your own or mod the case design."
        link-text="design files"
        link-path="https://github.com/MaximEdogawa/seedener/tree/main/enclosures/open_pill"
      ></NavCard>
    </div>
  </div>
  <div class="bg-emerald-50">
    <div class="py-4 flex justify-center">
      <h1
        class="w-3/5 font-sans font-medium 2xl:text-4xl sm:text-xl md:text-3xl text-black-50 text-left drop-shadow-2xl"
      >
        About SeedSaver
      </h1>
    </div>
    <div class="flex justify-center">
      <p
        class="w-3/5 font-sans font-medium 2xl:text-xl sm:text-base md:text-base text-gray-700 text-justify drop-shadow-2xl"
      >
        Seedsaver offers anyone the opportunity to build a verifiably
        air-gapped, stateless Chia signing device using inexpensive, publicly
        available hardware components. The goal of Seedsaver is to make Chia
        custody solution more accessible to users. By providing a user interface
        where they can easily create, transcribe and export Keys for signing
        spend bundles which are used for Chia custody solution vaults.
      </p>
    </div>
    <div class="py-4 flex justify-center">
      <p
        class="w-3/5 font-sans font-medium 2xl:text-xl sm:text-base md:text-base text-gray-700 text-justify drop-shadow-2xl"
      >
        Use Seedsaver-Sign to complete these task:
      </p>
    </div>
    <div class="flex justify-center">
      <ul
        class="list-disc w-1/2 font-sans font-medium 2xl:text-xl sm:text-base md:text-base text-gray-700 text-justify drop-shadow-2xl"
      >
        <li>Create Keys for custody solution</li>
        <li>Scan Private Keys, Encrypted Private Keys, SpendBundle</li>
        <li>Backup Private Keys flow</li>
        <li>Export Public Keys via QR</li>
        <li>Export Encrypted Private Keys via QR</li>
        <li>Export Transcribe Private Keys via mark down QR view</li>
        <li>Sign Spend Bundle with Private Keys</li>
        <li>Merge Spend Bundle Signed Parts</li>
        <li>Export Signed Spend Bundle via QR Transfer Loop</li>
        <li>Rekey Priv Keys</li>
      </ul>
    </div>
    <div class="py-4 flex justify-center">
      <p
        class="w-3/5 font-sans font-medium 2xl:text-xl sm:text-base md:text-base text-gray-700 text-justify drop-shadow-2xl"
      >
        The key component in SeedSaver is a specific version of the Raspberry Pi
        Zero single board computer (version 1.3) that does not include WiFi or
        Bluetooth functionality; the absence of these modules ensures that your
        private keys never leave the device. Communication with wallet software
        is accomplished using a two-way QR code transfer loop exchange process.
        Information about a proposed transaction is displayed by the wallet
        software on your computer’s screen, encoded in multiple QR codes, and
        you scan in the transaction information using SeedSaver’s-Sign built-in
        camera. Information about the proposed transaction is then displayed on
        the SeedSaver-Sign screen. Using cryptographic signatures,
        SeedSaver-Sign then proves that it has the correct private keys to
        authorize the spend bundles, and QR codes demonstrating that signed
        spend bundle displayed on SeedSaver’s-Sign screen.
      </p>
    </div>
    <div class="py-4 flex justify-center">
      <p
        class="w-3/5 font-sans font-medium 2xl:text-xl sm:text-base md:text-base text-gray-700 text-justify drop-shadow-2xl"
      >
        You then use your smartphone's camera with Seedsaver-Store companion app
        to input the QR codes generated by SeedSaver-Sign to authorize the
        transaction.
      </p>
    </div>
    <div
      class="p-8 flex flex-row justify-items-stretch justify-evenly gap-2 drop-shadow-2xl"
    >
      <button
        class="p-2 font-sans font-bold text-xs 2xl:text-base sm:text-xs md:text-xs text-neutral-50 bg-emerald-500 shadow-lg shadow-emerald-500/50 rounded-full hover:bg-emerald-500 drop-shadow-2xl"
      >
        <a
          href="https://github.com/MaximEdogawa/seedsaver_wallet/releases"
          target="_blank"
        >
          DOWNLOAD THE LASTEST APP RELEASE (ANDROID APK)
        </a>
      </button>
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
import backgroundUrl from "@/assets/raspbeerypi_zero_banner.jpg";
import NavCard from "../components/NavCard.vue";
</script>
