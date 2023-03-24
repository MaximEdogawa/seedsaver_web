<template>
  <div
    class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <img class="rounded-t-lg" :src="imagePath" alt="" />
    <div class="p-4">
      <a :href="linkPath">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ headline }}
        </h5></a
      >

      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ text }}
      </p>
      <a
        :href="linkPath"
        class="inline-flex items-center px-3 py-2 text-sm font-bold text-center text-white bg-emerald-500 rounded-lg hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"
      >
        {{ linkText }}
        <svg
          aria-hidden="true"
          class="w-4 h-4 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
import { link } from "fs";
import { ref, onMounted } from "vue";
import raspberry_white from "../assets/raspberry_case_white.png";
import logo_sign_black from "../assets/logo_sign_black.png";
import raspberry_gold from "../assets/raspberry_case_gold.png";

const imageNumber = ref(0);
const imagePath = ref("");
const headline = ref("");
const text = ref("");
const linkText = ref("");
const linkPath = ref("");
const props = defineProps({
  imageNumber: {
    type: Number,
    default: 1,
  },
  headline: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
  linkText: {
    type: String,
    default: "",
  },
  linkPath: {
    type: String,
    default: "",
  },
});

onMounted(async () => {
  imageNumber.value = props.imageNumber;
  headline.value = props.headline;
  text.value = props.text;
  linkText.value = props.linkText;
  linkPath.value = props.linkPath;
  switch (imageNumber.value) {
    case 1:
      imagePath.value = raspberry_white;
      break;
    case 2:
      imagePath.value = logo_sign_black;
      break;
    case 3:
      imagePath.value = raspberry_gold;
      break;
    default:
      imagePath.value = raspberry_white;
      break;
  }
});
</script>
